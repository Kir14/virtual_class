package com.kirill.virtual_class.websocket.controller;


import com.kirill.virtual_class.websocket.model.ClassMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import java.util.Objects;

@Controller
public class WebSocketController {



    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/publicChatRoom")
    public ClassMessage sendMessage(@Payload ClassMessage chatMessage) {
        return chatMessage;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/publicChatRoom")
    public ClassMessage addUser(@Payload ClassMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
        Objects.requireNonNull(headerAccessor.getSessionAttributes()).put("username", chatMessage.getSender());
        return chatMessage;
    }

}
