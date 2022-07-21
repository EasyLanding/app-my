import React, { Component } from 'react';
import './Task.css';
import TaskInfo from './TaskInfo';

export default class Task extends Component {
	render() {
		const {
			todos, onDeleted, onToggleDone, onToggleImportant, onEditChange, onSaveChange
		} = this.props;

		const elements = todos.map((el) => {
			const { id, ...itemProps } = el;
			return (
				<TaskInfo
					key={ id }
					{ ...itemProps }
					onDeleted={ () => onDeleted(id) }
					onToggleImportant={ () => onToggleImportant(id) }
					onToggleDone={ () => onToggleDone(id) }
					onEditChange={(e) => onEditChange(e)}
					onSaveChange={ () => onSaveChange()}
				/>
			);
		});
		return (
			<ul className="todo-list">
				{ elements }
			</ul>
		);
	}
}
