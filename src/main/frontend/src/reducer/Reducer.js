import {combineReducers} from "redux";
import StudentReducer from "./student"

import StudentActive from "./student-active"

const allReducers = combineReducers(
    {
        students: StudentReducer,
        active: StudentActive
    }
);

export default allReducers