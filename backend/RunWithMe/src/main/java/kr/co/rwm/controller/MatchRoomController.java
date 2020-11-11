package kr.co.rwm.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.rwm.entity.User;
import kr.co.rwm.model.ChatRoom;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.repo.MatchRoomRepository;
import kr.co.rwm.service.JwtTokenProvider;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/match")
public class MatchRoomController {

    private final MatchRoomRepository matchRoomRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @GetMapping("/room")
    public String rooms() {
        return "/chat/room2";
    }

//    @GetMapping("/rooms")
//    @ResponseBody
//    public List<ChatRoom> room() {
//        List<ChatRoom> chatRooms = chatRoomRepository.findAllRoom();
//        chatRooms.stream().forEach(room -> room.setUserCount(chatRoomRepository.getUserCount(room.getRoomId())));
//        return chatRooms;
//    }

    @PostMapping("/room")
    @ResponseBody 
    public ResponseEntity createAndSelectChatroom(@RequestBody Map<String, Integer> idInfo, HttpServletRequest request) {
    	System.out.println(idInfo);
		String token = request.getHeader("AUTH");
		int uid = 0;
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
		}
    	ChatRoom result =  matchRoomRepository.createAndSelectChatroom(uid, idInfo);
    	System.out.println("*******************************");
    	System.out.println(result);
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.CREATE_CHATROOM_SUCCESS, result), HttpStatus.OK);
    }

    @GetMapping("/user")
    @ResponseBody
    public String getUserInfo() {
    	System.out.println("유저유저");
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) auth.getPrincipal();
        Integer userId = user.getUserId();
        
        String name = auth.getName();
        return name;
    }
}
