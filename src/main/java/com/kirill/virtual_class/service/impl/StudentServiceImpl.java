package com.kirill.virtual_class.service.impl;


import com.kirill.virtual_class.domain.Student;
import com.kirill.virtual_class.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class StudentServiceImpl implements StudentService {

    private  Long studentId = 1L;
    private Map<Long, Student> studentMap=new HashMap<Long, Student>();

    {
        Student stud=new Student();
        stud.setId(studentId);
        stud.setName("Kirill");
        stud.setHandUp(true);
        studentMap.put(stud.getId(),stud);
    }


    @Override
    public Collection<Student> All() {
        return studentMap.values();
    }

    @Override
    public Student Add(Student stud) {
        Long newStudentId= ++studentId;
        stud.setId(newStudentId);
        stud.setHandUp(false);
        studentMap.put(stud.getId(),stud);
        return studentMap.get(newStudentId);
    }

    @Override
    public Student DeleteById(Long id) {
        if(studentMap.get(id) != null){
            studentMap.remove(id);
        }
        return null;
    }
}
