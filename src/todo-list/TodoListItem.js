import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {
    render() {
        return (
            <div className="container">
                <h1>{this.props.title}</h1>
                <h3>{this.props.dueDate}</h3>
                <h4>{this.props.priority}</h4>
            </div>
        );
    }
}

export default TodoListItem;