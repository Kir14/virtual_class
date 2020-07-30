import React from 'react';
import PropTypes from 'prop-types';



const ToDoItem = ({ name, isHandUp, handUpDown }) => (
    <li className="todo-item">
        <i onClick={() => handUpDown(name)} className={isHandUp ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
        <span className={isHandUp ? 'completed text' : 'text'}>{name}</span>
    </li>
);

ToDoItem.propTypes = {
    name: PropTypes.string,
    isHandUp: PropTypes.bool,
}

ToDoItem.defaultProps = {
    name: '',
    isCompleted: false,
}

export default ToDoItem;
