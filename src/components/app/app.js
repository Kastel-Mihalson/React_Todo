import { Component } from "react";
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import './app.css';

export default class All extends Component {

    maxId = 10;

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const newTodoData = todoData.filter((el) => el.id !== id);
            return {
                todoData: newTodoData
            }
        })
    }
    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem]
            }
        })
    }
    createTodoItem = (label) => {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }
    toggleProperty = (arr, id, propName) => {
        const itemIndex = arr.findIndex((el) => el.id === id);
        const oldItem = arr[itemIndex];
        const newItem = {
            ...oldItem, [propName]: !oldItem[propName]
        }
        return [
            ...arr.slice(0, itemIndex),
            newItem,
            ...arr.slice(itemIndex + 1)
        ];
    }
    search = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((el) => {
            return el.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((el) => !el.done);
            case 'done':
                return items.filter((el) => el.done);
            default:
                return items;
        }
    }
    onFilterChange = (filter) => {
        this.setState({filter})
    }
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all' // all, active, done
    };

    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(
            this.search(todoData, term),
            filter
        );
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="app">
                <AppHeader done={doneCount} todo={todoCount}/>
                <SearchPanel
                    onSearchChange={this.onSearchChange}
                    onFilterChange={this.onFilterChange}
                    filter={filter}
                    />
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm
                    onItemAdded={this.addItem}/>
            </div>
        )
    }
}