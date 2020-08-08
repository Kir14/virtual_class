package com.kirill.virtual_class.service.impl;


import com.kirill.virtual_class.domain.Student;
import com.kirill.virtual_class.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StudentServiceImpl implements StudentService {

    private List<Student> students = new ArrayList<>();

    {
        Student stud = new Student();
        stud.setName("LiriKKK");
        stud.setHandUp(true);
        students.add(stud);
    }


    @Override
    public List<Student> All() {
        return students;
    }

    @Override
    public Student Add(String name) {
        Student stud = new Student();
        stud.setName(name);
        stud.setHandUp(false);
        students.add(stud);
        return stud;
    }

    @Override
    public Student DeleteByName(String name) {
        for (Student stud : students) {
            if (stud.getName().equals(name)) {
                students.remove(stud);
                return null;
            }
        }
        return null;
    }

    @Override
    public void HandUp(String name) {
        Optional<Student> stud = students.stream().filter(student -> name.equals(student.getName())).findFirst();
        stud.ifPresent(student -> student.setHandUp(true));
    }

    @Override
    public void HandDown(String name) {
        Optional<Student> stud = students.stream().filter(student -> name.equals(student.getName())).findFirst();
        stud.ifPresent(student -> student.setHandUp(false));
    }

}
