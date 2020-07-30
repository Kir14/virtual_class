package com.kirill.virtual_class.websocket.controller;

import com.kirill.virtual_class.domain.Student;
import com.kirill.virtual_class.service.StudentService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.Collection;

@Controller
public class SocketController {

    @MessageMapping("/user-all")
    @SendTo("/topic/user")
    public Collection<Student> send(@Payload StudentService students) {
        return students.All();
        
    }
}

