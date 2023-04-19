import React from "react";
import './app-header.css';

const AppHeader = ({ done, todo }) => {
    return (
        <div className="container text-center app-header">
            <h1>Список дел</h1>
            <p>Выполнено: {done}, осталось: {todo}</p>
        </div>
    )
}

export default AppHeader;