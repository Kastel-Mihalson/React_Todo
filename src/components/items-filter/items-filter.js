import React, { Component } from "react";

export default class ItemsFilter extends Component {

    buttons = [
        { name: 'all', label: 'Все' },
        { name: 'active', label: 'В работе' },
        { name: 'done', label: 'Выполненные' }
    ]

    render() {
        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const buttonClass = isActive ? 'btn-primary' : 'btn-outline-secondary';
            return (
                <button type="button"
                        className={`btn ${buttonClass}`}
                        key={name}
                        onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                { buttons }
            </div>
        )
    }
}