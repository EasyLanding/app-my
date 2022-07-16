import React, { Component } from 'react';
import './Task.css';
import TaskInfo from './TaskInfo'

export default class Task extends Component
{
    render ()
    {
        const { todos, onDeleted, onToggleDone, onToggleImportant } = this.props

        const elements = todos.map(function (el)
        {
            const { id, ...itemProps } = el
            return (
                <TaskInfo
                    key={ id }
                    { ...itemProps }
                    onDeleted={ () => onDeleted(id) }
                    onToggleImportant={ () => onToggleImportant(id) }
                    onToggleDone={ () => onToggleDone(id) }
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