package kr.co.rwm.controller;

import kr.co.rwm.model.ChatMessage;
import kr.co.rwm.repo.ChatRoomRepository;
import kr.co.rwm.service.ChatService;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@Slf4j
@RequiredArgsConstructor
@CrossOrigin(origins="*")
@Controller
public class ChatController {

    private final JwtTokenProvider jwtTokenProvider;
    private final ChatRoomRepository chatRoomRepository;
    private final ChatService chatService;
    
	private final UserService userService;

    /**
     * websocket "/pub/chat/message"로 들어오는 메시징을 처리한다.
     */
    @MessageMapping("/chat/message")
    public void message(ChatMessage message, @Header("token") String token) { 
    	System.out.println(message.getMessage());
    	System.out.println(token);
    	//String token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ0ZXN0NCIsImlhdCI6MTYwMzM3NzIzOSwiZXhwIjoxNjAzMzgwODM5fQ.mWC-X7UtaQ87EuWW_pcwbMt8tL2-naiShegDfW3t090";
        String email = jwtTokenProvider.getUserEmailFromJwt(token);
        String nickname = userService.findByUserEmail(email).get().getUsername();
        // 로그인 회원 정보로 대화명 설정
        message.setSender(nickname); 
        // 채팅방 인원수 세팅 
        message.setUserCount(chatRoomRepository.getUserCount(message.getRoomId()));
        // Websocket에 발행된 메시지를 redis로 발행(publish)
        chatService.sendChatMessage(message);
    }
}
