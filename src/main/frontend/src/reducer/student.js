
const initialState = {
    students: [
        {
            name: "Kirill",
            handUp: false
        },
        {
            name: "Kiri4",
            handUp: true
        }
    ]
};

export function membersReducer(state = initialState, action) {
    switch (action.type) {

        case "STUDENT_SELECTED":
            alert("ou boy " + action.payload.name);
            return state;

        default:
            return state
    }
}


