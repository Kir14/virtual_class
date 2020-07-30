import React,{Component} from "react";
import ToDoList from "../../containers/todo-list";

class ToDo extends Component {
    render() {

        const { students,  handUpDown } = this.props;
        const isStudentsNotEmpty = students && students.length > 0;

        return (
            <div>
                {isStudentsNotEmpty && <ToDoList handUpDow={handUpDown} studentList={students}  />}
            </div>
        );
    }
}

export default ToDo;