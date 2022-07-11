import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './AddElement.css'

export default class AddElement extends Component
{
    render ()
    {
        return (
            <div className="addElement">
                <button onClick={ () => this.props.onAdded('Hi') }>Add Element</button>
            </div>
        )
    }
}