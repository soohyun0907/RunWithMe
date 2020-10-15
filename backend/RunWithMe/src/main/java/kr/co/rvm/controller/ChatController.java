package kr.co.rvm.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import kr.co.rvm.model.ChatRoom;
import kr.co.rvm.service.ChatService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
public class ChatController {

    private final ChatService chatService;

    @PostMapping
    public ChatRoom createRoom(@RequestParam String name) {
        return chatService.createRoom(name);
    }

    @GetMapping
    public List<ChatRoom> findAllRoom() {
        return chatService.findAllRoom();
    }
}