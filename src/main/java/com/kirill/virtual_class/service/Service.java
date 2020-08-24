package com.kirill.virtual_class.service;

import com.kirill.virtual_class.domain.Student;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class Service {

    private List<Student> students = new ArrayList<>();
    private int id_count=0;


    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public int addStudent(Student student) {
        id_count++;
        student.setUuid(id_count);
        students.add(student);
        return id_count;
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
        for (Student stud : students) {
            if (stud.getName().equals(student.getName())) {
                return null;
            }
        }

        /*Optional<Student> stud = students.stream().filter(x -> x.getName().equals(student.getName())).findFirst();
        if(stud.isPresent()){
            return null;
        }*/

        return students;
    }
}
