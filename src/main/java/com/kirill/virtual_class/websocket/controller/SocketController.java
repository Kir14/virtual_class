package com.kirill.virtual_class.websocket.controller;

import com.kirill.virtual_class.domain.Student;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SocketController {

    @MessageMapping("/user-all")
    @SendTo("/topic/user")
    public Student send(@Payload Student message) {
        return message;
    }
}

