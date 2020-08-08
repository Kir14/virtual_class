package com.kirill.virtual_class.service;


import com.kirill.virtual_class.domain.Student;

import java.util.List;

public interface StudentService {
    List<Student> All();

    Student Add(String name);

    Student DeleteByName(String name);

    void HandUp(String name);

    void HandDown(String name);
    
}
