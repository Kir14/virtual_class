package com.kirill.virtual_class.resource.impl;

import com.kirill.virtual_class.domain.Student;
import com.kirill.virtual_class.resource.Resource;
import com.kirill.virtual_class.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/members")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentResourceImpl implements Resource<Student> {

    @Autowired
    private StudentService studentService;

    @Override
    public ResponseEntity<Collection<Student>> All() {
        return new ResponseEntity<>(studentService.All(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Student> Add(Student student) {
        return new ResponseEntity<>(studentService.Add(student), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Student> DeleteById(Long id) {
        return new ResponseEntity<>(studentService.DeleteById(id), HttpStatus.OK);
    }
}
