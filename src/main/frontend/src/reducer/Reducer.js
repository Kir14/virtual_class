import {combineReducers} from "redux";
import {membersReducer} from "./student";
import {userReducer} from "./user"


const allReducers = combineReducers(
    {
        students: membersReducer,
        user: userReducer
    }
);

export default allReducers