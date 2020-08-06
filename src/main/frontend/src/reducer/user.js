const initialState = {
    name: "",
    handUp: false
};

export function userReducer(state = initialState, action) {
    switch (action.type) {

        case "HAND_UP_DOWN":
            alert("this HAND_Up-Down");
            return {...state};

        case "LOGIN":
            alert("login " + action.payload);
            return {...state, name: action.payload};

        default:
            return state
    }
}
