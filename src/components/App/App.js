import React, { Component } from 'react';
import HeadrsApp from '../HeadrsApp/HeadrsApp';
import Footer from '../Footer/Footer';
import Task from '../Task/Task';
import AddElement from '../AddElement/AddElement';
import '../Footer/Footer.css'
import TasksFilter from '../TaskFilter/TasksFilter';
import ClearComponentButton from '../ClearComponentButton/ClearComponentButton';

export default class App extends Component
{
    nextId = 100
    keys = 101
    state = {
        todoData: [
            this.createToDoItem("Completed task"),
            this.createToDoItem("Active task"),
            this.createToDoItem("Editing task")
        ],
        term: "",
        filter: "all",
        time: Date.now()
    };


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

    createToDoItem (label) 
    {

        return {
            label,
            important: false,
            done: false,
            id: this.nextId++,
            key: this.keys++,
            // time: new Date()
        }
    }

    onAddItem = (text, time) =>
    {
        const newItem = this.createToDoItem(text, time)
        this.setState(({ todoData }) =>
        {
            const newArr = [...todoData, newItem]

            return {
                todoData: newArr
            }
        })
    }

    onToggleDone = (id) =>
    {
        this.setState(({ todoData }) =>
        {
            const index = todoData.findIndex((el) => el.id === id)
            const oldData = todoData[index]

            const newItem = { ...oldData, done: !oldData.done }

            const newArray = [
                ...todoData.slice(0, index),
                newItem,
                ...todoData.slice(index + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    onToggleImportant = (id) =>
    {
        this.setState(({ todoData }) =>
        {
            const index = todoData.findIndex((el) => el.id === id)
            const oldData = todoData[index]

            const newItem = { ...oldData, important: !oldData.important }

            const newArray = [
                ...todoData.slice(0, index),
                newItem,
                ...todoData.slice(index + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    onSearchChange = (term) =>
    {
        this.setState({ term });
    };

    searchItems (items, term)
    {
        if (term.length === 0)
        {
            return items;
        }

        return items.filter((item) =>
        {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter (items, filter)
    {
        if (filter === 'all')
        {
            return items;
        } else if (filter === 'active')
        {
            return items.filter((item) => (!item.done));
        } else if (filter === 'completed')
        {
            return items.filter((item) => item.done);
        }
    }

    onFilterChange = (filter) =>
    {
        this.setState({ filter });
    };


    onClearChange = () =>
    {
        this.setState(({ todoData }) =>
        {
            return {
                ...todoData,
                todoData: todoData.filter((item) => !item.done)
            }
        })
    }


    componentDidMount ()
    {
        this.intervalID = setInterval(
            () => this.forceUpdate(),
            5005
        );
    }
    componentWillUnmount ()
    {
        clearInterval(this.intervalID);
    }
    tick ()
    {
        this.setState({
            time: Date.now()
        });
    }


    render ()
    {
        const { todoData, term, filter, time } = this.state
        const visibleItems = this.filter(this.searchItems(todoData, term), filter)


        const doneCount = this.state.todoData.filter((el) => el.done).length
        const todoCount = this.state.todoData.length - doneCount

        return (
            <section className="todoapp">
                < HeadrsApp
                    onSearchChange={ this.onSearchChange }
                />
                <section className="main">
                    <Task
                        time={ time }
                        todos={ visibleItems }
                        onDeleted={ this.deletedItem }
                        onToggleImportant={ this.onToggleImportant }
                        onToggleDone={ this.onToggleDone }
                    />

                    < AddElement
                        onAdded={ this.onAddItem }
                    />

                </section>
                <footer className="footer">
                    < Footer
                        toDo={ todoCount }
                        done={ doneCount }
                    />
                    < TasksFilter
                        filter={ filter }
                        onFilterChange={ this.onFilterChange }
                    />
                    <ClearComponentButton
                        onClearChange={ this.onClearChange }
                    />
                </footer>
            </section>
        )
    }

}