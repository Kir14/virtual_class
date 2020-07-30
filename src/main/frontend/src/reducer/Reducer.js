import {combineReducers} from "redux";
import StudentReducer from "./student"

import StudentActive from "./student-active"

 import TodoStudents from "./todo-Students"

const allReducers = combineReducers(
    {
        students: StudentReducer,
        active: StudentActive,
        todo_students: TodoStudents
    }
);

export default allReducers