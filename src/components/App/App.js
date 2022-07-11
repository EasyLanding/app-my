import React, { Component } from 'react';
import HeadrsApp from '../HeadrsApp/HeadrsApp';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';
import AddElement from '../AddElement/AddElement';


export default class App extends Component
{
    nextId = 100
    keys = 101
    state = {
        todoData: [{
            label: "Completed task",
            time: "created 17 seconds ago",
            id: 1
        },
        {
            label: "Active task",
            time: "created 5 minutes ago",
            id: 2
        },
        {
            label: "Editing task",
            time: "created 5 minutes ago",
            id: 3
        }
        ]
    }


    deletedItem = (id) =>
    {
        this.setState(({ todoData }) =>
        {
            const index = todoData.findIndex((el) => el.id === id)

            const beforeArray = todoData.slice(0, index)
            const afterArray = todoData.slice(index + 1)
            const newArray = [...beforeArray, ...afterArray]

            return {
                todoData: newArray
            }
        })
    }

    onAddItem = (text) =>
    {
        const newItem = {
            label: text,
            important: false,
            id: this.nextId++,
            key: this.keys++
        }
        this.setState(({ todoData }) =>
        {
            const newArr = [...todoData, newItem]

            return {
                todoData: newArr
            }
        })
    }

    onToggle = (id) =>
    {
        console.log('toggle', id)
    }

    onDone = (id) =>
    {
        console.log('Done', id)
    }

    render ()
    {
        return (
            <section className="todoapp">
                < HeadrsApp />
                <section className="main">
                    <Task
                        todos={ this.state.todoData }
                        onDeleted={ this.deletedItem }
                        onToggle={ this.onToggle }
                        onDone={ this.onDone }
                    />

                    < AddElement
                        onAdded={ this.onAddItem }
                    />

                </section>
                < Footer
                />
            </section>
        )
    }

}