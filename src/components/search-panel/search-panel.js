import React, {Component} from "react";
import './search-panel.css';
import ItemsFilter from "../items-filter/items-filter";

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({term})
        this.props.onSearchChange(term);
    }

    render() {
        const {filter, onFilterChange} = this.props;
        return (
            <div className="container text-center search-panel">
                <div className="search">
                    <div className="input-group">
                        <input
                            className="form-control"
                            placeholder="Найти задачу"
                            value={this.state.term}
                            onChange={this.onSearchChange}/>
                        <ItemsFilter
                            filter={filter}
                            onFilterChange={onFilterChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

