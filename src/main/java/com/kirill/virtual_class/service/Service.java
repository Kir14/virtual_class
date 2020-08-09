package com.kirill.virtual_class.service;

import com.kirill.virtual_class.domain.Student;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class Service {

    private List<Student> students = new ArrayList<>();


    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public void addStudent(Student student) {
        students.add(student);
    }

    public void deleteStudent(Student student) {
        students.remove(student);
    }

    public void changeStudent(Student student) {
        int i=0;
        while (true){
            if(students.get(i).getName().equals(student.getName())){
                break;
            }
            i++;
        }
        boolean handUp = !student.getHandUp();
        students.get(i).setHandUp(handUp);
    }
}
