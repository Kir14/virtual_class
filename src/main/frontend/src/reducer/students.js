const initialState = {
    students: []
};

export function membersReducer(state = initialState, action) {
    switch (action.type) {

        case "STUDENT_SELECTED":
            alert("Select " + action.payload.name);
            return state;

        case "NEW_MASS":
            return {...state, students: action.payload};

        default:
            return state
    }
}


