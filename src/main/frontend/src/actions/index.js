
export  const select = (student) => {
    return{
        type: "STUDENT_SELECTED",
        payload: student
    }
};

export const setName = (name) =>{
    alert("name: " + name);
    return{
        type: "STUDENT_LOGIN",
        payload: name
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