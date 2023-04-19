import React, { Component } from "react";
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (!this.state.label) {
            return;
        }
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form
                className="container d-flex item-add-form"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Добавить новую задачу"
                    onChange={this.onLabelChange}
                    value={this.state.label}/>
                <button
                    className="btn btn-outline-secondary">Добавить</button>
            </form>
        )
    }
}

