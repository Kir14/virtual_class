
export  const select = (student) => {
    alert("dddd" + student.name)
    return{
        type: "STUDENT_SELECTED",
        payload: student
    }
};