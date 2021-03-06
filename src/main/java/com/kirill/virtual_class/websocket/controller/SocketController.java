package com.kirill.virtual_class.websocket.controller;

import com.kirill.virtual_class.domain.Student;
import com.kirill.virtual_class.service.Service;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class SocketController {

    Service students = new Service();


    @MessageMapping("/user-all")
    @SendTo("/topic/user")
    public List<Student> send(@Payload Student student) {

        switch (student.getType()) {
            case HAND_UP_DOWN:
                students.changeStudent(student);
                break;
            case JOIN:
                /*if (students.findStudent(student) != null) {
                    return null;
                }*/
                students.addStudent(student);
                break;
            case LEAVE:
                students.deleteStudent(student);
                break;
            default: return students.getStudents();
        }
        return students.getStudents();
    }

    @MessageMapping("/login")
    @SendTo("/topic/user")
    public Student sendMessage(@Payload Student recForId) {
        return recForId;
    }


    /*@MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public Student addUser(@Payload Student student,
                               SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
        headerAccessor.getSessionAttributes().put("username", student.getName());
        return student;
    }*/
}

