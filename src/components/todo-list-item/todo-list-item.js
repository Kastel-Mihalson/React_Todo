import React, { Component } from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {
    render() {
        const { label,
            onDeleted,
            onToggleDone,
            onToggleImportant,
            done, important
        } = this.props;

        let className = 'd-flex justify-content-between todo-list-item'
        if (done) {
            className += ' done'
        }
        if (important) {
            className += ' important'
        }

        return (
            <span className={className}>
            <span
                onClick={onToggleDone}>
            {label}
            </span>
            <span>
                <button type="button"
                        className="btn btn-outline-danger"
                        onClick={onDeleted}>
                    <i className="bi bi-trash"></i>
                </button>
                <button type="button"
                        className="btn btn-outline-success"
                        onClick={onToggleImportant}>
                    <i className="bi bi-info-circle"></i>
                </button>
            </span>
        </span>
        )
    }
}