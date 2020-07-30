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


}
