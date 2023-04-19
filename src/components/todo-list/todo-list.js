import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                onDeleted={() => onDeleted(id) }
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}/>
            </li>
        )
    });

    return (
        <div className="container todo-list">
            <ul className="list-group">
                { elements }
            </ul>
        </div>
    )
}

export default TodoList;