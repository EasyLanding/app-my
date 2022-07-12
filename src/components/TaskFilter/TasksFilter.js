import React, { Component } from 'react';
import './TaskFilter.css'


export default class TasksFilter extends Component
{
    buttons = [
        { name: "all", label: "All" },
        { name: "active", label: "Active" },
        { name: "completed", label: "Completed" }
    ]
    render ()
    {
        const { filter, onFilterChange } = this.props
        const buttons = this.buttons.map(({ name, label }) =>
        {
            const isActive = filter === name
            const cl = isActive ? "selected" : ""
            return (
                <li key={ name }>
                    <button className={ `${cl}` }

                        onClick={ () => onFilterChange(name) }

                    >{ label }</button>
                </li>
            )

        })

        return (
            <ul className="filters">
                { buttons }
            </ul>
        )
    }
}