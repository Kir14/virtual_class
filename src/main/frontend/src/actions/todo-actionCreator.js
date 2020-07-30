import {ADD_STUDENT, HAND_UP_DOWN} from '../constants';

export const addStudent = (name, isHandUp) => ({
    type: ADD_STUDENT,
    name,
    isHandUp
});


export const handUpDown = name => ({
    type: HAND_UP_DOWN,
    name
});
