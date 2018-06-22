import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

function removeFromList(l, index) {
    l.splice(index, 1);
    return l;
}

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                new TodoListItemModel('item 1', 'priority 1', 6),
                new TodoListItemModel('item 2', 'priority 3', 3),
                new TodoListItemModel('item 3', 'priority 2', 5)
            ]
        }
    }

    onComplete = (index) => {
        this.setState({
            todos: removeFromList(this.state.todos, index)
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.todos.map((item, index) => {
                        return (
                        <TodoListItem 
                        index = {index} 
                        title={item.title} 
                        dueDate={item.dueDate} 
                        priority={item.priority}
                        onComplete={this.onComplete}/>
                        )
                    })
                }
            </div>
        );
    }
}

class TodoListItemModel {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export default TodoList;