import React, { Component } from 'react';
import './Task.css'

export default class TaskInfo extends Component
{
    state = {
        done: false,
        important: false
    }

    onLabelClick = () =>
    {
        this.setState(({ done }) =>
        {
            return {
                done: !done
            }
        })
    }

    onMarkImportant = () =>
    {
        this.setState(({ important }) =>
        {
            return {
                important: !important
            }
        })
    }

    render ()
    {
        const { label,
            time,
            onDeleted,
        } = this.props
        const { done, important } = this.state
        let classNames = ""
        let classNamesD = "description"

        if (done)
        {
            classNames = "completed"
        }

        if (important)
        {
            classNamesD += " important"
        }

        return (
            <li className={ classNames }>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={ this.onMarkImportant } />
                    <label>
                        <span className={ classNamesD } onClick={ this.onLabelClick }>{ label }</span>
                        <span className="created">{ time }</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={ onDeleted }></button>
                </div>
            </li>
        )
    }
}
