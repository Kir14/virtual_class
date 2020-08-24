const initialState = {
    name: "",
    handUp: false,
    type: "JOIN",
    isChange: false
};

export function userReducer(state = initialState, action) {
    switch (action.type) {

        case "HAND_UP_DOWN":
            return {...state, handUp: !action.payload};

        case "LOGIN":
            return {...state, name: action.payload};

        case "LOGOUT":
            return {...state, name: action.payload};

        case "TYPE_MESSAGE":
            return {...state, type: action.payload};

        case "isChange":
            return {...state, isChange: action.payload};

        default:
            return state
    }
}
