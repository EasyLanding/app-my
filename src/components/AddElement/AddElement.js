import React, { Component } from 'react'
import './AddElement.css'

export default class AddElement extends Component
{
    state = {
        label: ''
    }
    onLabelChange = (e) =>
    {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) =>
    {
        e.preventDefault()
        this.props.onAdded(this.state.label)
        this.setState({
            label: ""
        })
    }

    render ()
    {
        return (

            <form className="addElement"
                onSubmit={ this.onSubmit }
            >
                <input type="text"
                    className="form-control"
                    onChange={ this.onLabelChange }
                    placeholder="What needs to be done today?"
                    value={ this.state.label }
                />
                <button >Add Task</button>
            </form>

        )
    }
}