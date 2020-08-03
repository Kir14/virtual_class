package com.kirill.virtual_class.websocket.controller;

import com.kirill.virtual_class.domain.Student;
import com.kirill.virtual_class.service.Service;
import com.kirill.virtual_class.service.StudentService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import java.util.Collection;
import java.util.List;

@Controller
public class SocketController {

    @MessageMapping("/user-all")
    @SendTo("/topic/user")
    public List<Student> send(@Payload Service students) {
        return students.getStudents();
    }

   /* @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public Student sendMessage(@Payload Student chatMessage) {
        return chatMessage;
    }


    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public Student addUser(@Payload Student student,
                               SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
        headerAccessor.getSessionAttributes().put("username", student.getName());
        return student;
    }*/
}

