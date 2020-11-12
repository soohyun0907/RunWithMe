package kr.co.rwm.repo;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Matching;
import kr.co.rwm.model.ChatRoom;
import kr.co.rwm.pubsub.RedisSubscriber;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class MatchRoomRepository {
    // Redis CacheKeys
    private static final String CHAT_ROOMS = "CHAT_ROOM"; // 채팅룸 저장
    public static final String USER_COUNT = "USER_COUNT"; // 채팅룸에 입장한 클라이언트수 저장
    public static final String ENTER_INFO = "ENTER_INFO"; // 채팅룸에 입장한 클라이언트의 sessionId와 채팅룸 id를 맵핑한 정보 저장


    @Resource(name = "redisTemplate")
    private HashOperations<String, String, ChatRoom> hashOpsChatRoom;
    @Resource(name = "redisTemplate")
    private HashOperations<String, String, ChatRoom> hashOpsMatchRoom;
    @Resource(name = "redisTemplate")
    private HashOperations<String, String, String> hashOpsEnterInfo;
    @Resource(name = "redisTemplate")
    private ValueOperations<String, String> valueOps;

    @Autowired 
    UserRepository userRepository;
    @Autowired
    MatchRepository matchRepository;
    
    private final String GUEST_ID = "guestId";
    // 모든 채팅방 조회
    public List<ChatRoom> findAllRoom() {
        return hashOpsMatchRoom.values(CHAT_ROOMS);
    }

    // 특정 채팅방 조회
    public ChatRoom findRoomById(String id) {
        return hashOpsMatchRoom.get(CHAT_ROOMS, id);
    }

    // 채팅방 생성 : 서버간 채팅방 공유를 위해 redis hash에 저장한다.
    public ChatRoom createAndSelectChatroom( int uid, Map<String, Integer> idInfo) {
    	
    	log.info("uid: " + uid);
    	log.info("guestId: " + idInfo.get(GUEST_ID));
    	Optional<Matching> matching = matchRepository.findByMasterIdAndGuestId(uid, idInfo.get(GUEST_ID));
    	
    	if(matching.isPresent()) // 이미 방이 존재하다면,
    	{
    		ChatRoom result =  hashOpsMatchRoom.get(matching.get().getRoomId(), CHAT_ROOMS);
    		return result;
    	} 
    	else 
    	{
    		String friendName = userRepository.findByUserId(idInfo.get(GUEST_ID)).getUsername();
        	ChatRoom chatRoom = ChatRoom.create(friendName); 
        	hashOpsMatchRoom.put(chatRoom.getRoomId(), CHAT_ROOMS, chatRoom);
        	Matching match = Matching.builder().masterId(uid).guestId(idInfo.get(GUEST_ID)).roomId(chatRoom.getRoomId()).build();
        	matchRepository.save(match);
        	match = Matching.builder().guestId(uid).masterId(idInfo.get(GUEST_ID)).roomId(chatRoom.getRoomId()).build();
        	matchRepository.save(match);        	
        	return chatRoom;
    	}
    }

    // 유저가 입장한 채팅방ID와 유저 세션ID 맵핑 정보 저장
    public void setUserEnterInfo(String sessionId, String roomId) {
        hashOpsEnterInfo.put(ENTER_INFO, sessionId, roomId);
    }

    // 유저 세션으로 입장해 있는 채팅방 ID 조회
    public String getUserEnterRoomId(String sessionId) {
        return hashOpsEnterInfo.get(ENTER_INFO, sessionId);
    }

    // 유저 세션정보와 맵핑된 채팅방ID 삭제
    public void removeUserEnterInfo(String sessionId) {
        hashOpsEnterInfo.delete(ENTER_INFO, sessionId);
    }

    // 채팅방 유저수 조회
    public long getUserCount(String roomId) {
        return Long.valueOf(Optional.ofNullable(valueOps.get(USER_COUNT + "_" + roomId)).orElse("0"));
    }

    // 채팅방에 입장한 유저수 +1
    public long plusUserCount(String roomId) {
        return Optional.ofNullable(valueOps.increment(USER_COUNT + "_" + roomId)).orElse(0L);
    }

    // 채팅방에 입장한 유저수 -1
    public long minusUserCount(String roomId) {
        return Optional.ofNullable(valueOps.decrement(USER_COUNT + "_" + roomId)).filter(count -> count > 0).orElse(0L);
    }
}
