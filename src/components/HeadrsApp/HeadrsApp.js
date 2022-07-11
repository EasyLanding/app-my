import React from 'react';
import ReactDOM from 'react-dom';
import "./HeadrsApp.css"

const HeadrsApp = () =>
{
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" />
        </header>
    )
}

export default HeadrsApp