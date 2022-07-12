import React, { Component } from 'react';
import "./HeadrsApp.css"

export default class HeadrsApp extends Component
{
    state = {
        term: ''
    }

    onTermChange = (e) =>
    {
        const { onSearchChange = () => { } } = this.props;
        this.setState({
            term: e.target.value
        });

        onSearchChange(e.target.value);
    };

    render ()
    {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo"
                    placeholder="Search you Task ToDay..."
                    value={ this.state.term }
                    onChange={ this.onTermChange }
                />
            </header>
        )
    }
}