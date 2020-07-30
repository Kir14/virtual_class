import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from "../components/all_for_todo/todo-item/todo-item";



const ToDoList = ({ studentsList, handUpDown }) => (
    <ul className="todo-list">
        {studentsList.map(({ name, isHandUp }) => (
            <ToDoItem handUpDow={handUpDown}  key={name} name={name} isHandUp={isHandUp} />
        ))}
    </ul>
);

ToDoList.propTypes = {
    studentsList: PropTypes.array,
    handUpDow: PropTypes.func,
};

ToDoList.defaultProps = {
    studentsList: [],
    handUpDown: () => {},
};

export default ToDoList;