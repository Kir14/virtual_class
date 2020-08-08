
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

export const handUpDown = (handUp) => {
    return{
        type: "HAND_UP_DOWN",
        payload: handUp
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