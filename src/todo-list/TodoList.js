import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoListItem title="hoe" dueDate="Monday" priority="1" />
                <TodoListItem title="wash dog" dueDate="tomorrow" priority="2" />
                <TodoListItem title="lettuce" dueDate="Monday" priority="3" />
                <TodoListItem title="shit" dueDate="Monday" priority="4" />
                <TodoListItem title="shit" dueDate="Monday" priority="4" />
            </div>
        );
    }
}

export default TodoList;