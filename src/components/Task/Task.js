import React, { Component } from 'react';
import './Task.css'
import TaskInfo from './TaskInfo';

export default class Task extends Component
{
    render ()
    {
        const { todos, onDeleted, onToggle, onDone } = this.props

        const elements = todos.map(function (el)
        {
            const { id, ...itemProps } = el;
            return (
                <TaskInfo
                    key={ id }
                    { ...itemProps }
                    onDeleted={ () => onDeleted(id) }
                    onToggle={ () => onToggle(id) }
                    onDone={ () => onDone(id) }
                />
            )
        })
        return (
            <ul className="todo-list">
                { elements }
            </ul>
        )
    }
}