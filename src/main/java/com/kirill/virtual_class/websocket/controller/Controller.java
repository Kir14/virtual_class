package com.kirill.virtual_class.websocket.controller;

import com.kirill.virtual_class.websocket.model.ClassMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
class MyController {

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ClassMessage sendMessage(@Payload ClassMessage chatMessage) {
        return chatMessage;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ClassMessage addUser(@Payload ClassMessage chatMessage,
                               SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }

}
