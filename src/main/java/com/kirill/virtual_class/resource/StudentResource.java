package com.kirill.virtual_class.resource;


import com.kirill.virtual_class.domain.Student;
import com.kirill.virtual_class.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/members")
public class StudentResource {

    @Autowired
    private StudentService studentService;

    @GetMapping
    public Collection<Student> All() {
        return studentService.All();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Student Add(@RequestBody Student stud) {
        return studentService.Add(stud);
    }

    @DeleteMapping("{id}")
    public Student DeleteById(@PathVariable Long id) {
        return studentService.DeleteById(id);
    }
}
