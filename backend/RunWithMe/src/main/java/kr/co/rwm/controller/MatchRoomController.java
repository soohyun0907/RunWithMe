package kr.co.rwm.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.rwm.model.ChatRoom;
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
    public ChatRoom createAndSelectChatroom(@RequestBody Map<String, Integer> friendId) {
    	System.out.println(friendId);
        return matchRoomRepository.createAndSelectChatroom(friendId.get("friendId"));
    }

//    @GetMapping("/room/enter/{roomId}")
//    public String roomDetail(Model model, @PathVariable String roomId) {
//        model.addAttribute("roomId", roomId);
//        return "/chat/roomdetail";
//    }
//
//    @GetMapping("/room/{roomId}")
//    @ResponseBody
//    public ChatRoom roomInfo(@PathVariable String roomId) {
//        return chatRoomRepository.findRoomById(roomId);
//    }
//
//    @GetMapping("/user")
//    @ResponseBody
//    public LoginInfo getUserInfo() {
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        String name = auth.getName();
//        return LoginInfo.builder().name(name).token(jwtTokenProvider.generateToken(name)).build();
//    }
}
