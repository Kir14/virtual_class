import {combineReducers} from "redux";
import {membersReducer} from "./students";
import {userReducer} from "./user"


const allReducers = combineReducers(
    {
        students: membersReducer,
        user: userReducer
    }
);

export default allReducers