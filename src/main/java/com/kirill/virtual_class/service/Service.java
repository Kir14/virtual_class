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

        for (Student stud : students) {
            if (stud.getName().equals(student.getName())) {
                students.remove(stud);
                return;
            }
        }

        /*int i = 0;
        while (true) {
            if (students.get(i).getName().equals(student.getName())) {
                break;
            }
            i++;
        }
        students.remove(i);*/
        //students.remove(student);
    }

    public void changeStudent(Student student) {
        for (Student stud : students) {
            if (stud.getName().equals(student.getName())) {
                stud.setHandUp(!student.getHandUp());
                return;
            }
        }
    }


    public List<Student> findStudent(Student student) {
        Optional<Student> stud = students.stream().filter(x -> x.getName().equals(student.getName())).findFirst();
        if(stud.isPresent()){
            return null;
        }
        return students;
    }
}
