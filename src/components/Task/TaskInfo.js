import React, { Component } from 'react';
import './Task.css'
import { formatDistanceToNow } from 'date-fns'


export default class TaskInfo extends Component
{

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
            onDeleted,
            onToggleImportant,
            onToggleDone,
            done, important,
            time
        } = this.props
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
                    <input className="toggle" type="checkbox" onClick={ onToggleImportant } />
                    <label>
                        <span className={ classNamesD } onClick={ onToggleDone }>{ label }</span>
                        <span className="created">{ formatDistanceToNow(time, { includeSeconds: true }) }</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={ onDeleted }></button>
                </div>
            </li>
        )
    }
}