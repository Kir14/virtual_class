import {ADD_STUDENT, HAND_UP_DOWN} from '../constants';

const STUDENTS = [
    {
        name: 'KIR',
        isHandUp: true,
    },
    {
        name: 'RIK',
        isHandUp: false,
    },
    {
        name: 'Ill',
        isHandUp: true,
    }
];

const students = (state = STUDENTS, {name, isHandUp, type}) => {
    switch (type) {
        case ADD_STUDENT :
            return [
                ...state, {
                    name,
                    isHandUp,
                }
            ];
        case HAND_UP_DOWN:
            return [...state].map(student => {
                if (student.name === name) {
                    student.isHandUp = !student.isHandUp;
                }
                return student;
            });
        default:
            return state;
    }
}

export default students;
