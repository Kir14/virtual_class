package com.kirill.virtual_class.service;


import com.kirill.virtual_class.domain.Student;

import java.util.Collection;

public interface StudentService {
    Collection<Student> All();

    Student Add(Student stud);

    Student DeleteById(Long id);

    Student HandUp(Long id);

    Student HandDown(Long id);
    
}
