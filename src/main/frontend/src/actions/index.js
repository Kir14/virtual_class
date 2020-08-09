
export  const select = (student) => {
    return{
        type: "STUDENT_SELECTED",
        payload: student
    }
};

export const newMass = (students) => {
    return{
        type: "NEW_MASS",
        payload: students
    }
};

export const handUpDown = (handUpDown) => {
    return{
        type: "HAND_UP_DOWN",
        payload: handUpDown
    }
};

export const setTypeMessage = (type) => {
    return{
        type: "TYPE_MESSAGE",
        payload: type
    }
};

export const login = (name) => {
    return{
        type: "LOGIN",
        payload: name
    }
};

export const logout = () => {
    return{
        type: "LOGOUT",
        payload: ""
    }
};