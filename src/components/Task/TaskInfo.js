import React, { Component,useState } from 'react';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';

export default class TaskInfo extends Component {
    state = {
		edit: false,
	}
	onLabelClick = () => {
		this.setState(({ done }) => ({
			done: !done,
		}));
	};

	onMarkImportant = () => {
		this.setState(({ important }) => ({
			important: !important,
		}));
	};

	editToDo = () =>{
		this.setState(({ edit }) => ({
			edit: !edit,
		}));
	}

	render() {
		const {
			label,
			onDeleted,
			onToggleImportant,
			onToggleDone,
			done, important,
			onEditChange,
			onSaveChange,
			time
		} = this.props;
		let classNames = '';
		let classNamesD = 'description';
		if (done) {
			classNames = 'completed';
		}

		if (important) {
			classNamesD += ' important';
		}

		return (
			<li className={ classNames }>
				<div className="view">
					<input className="toggle" type="checkbox" onClick={ onToggleImportant } />
					<label>
						{
							this.state.edit ?
							<div>
								<input
								 className="inputChangeValue"
								 onChange={onEditChange}
								/>
								<button 
								    className="buttonChangeValue"
									onClick={ onSaveChange }
								>Сохранить</button>
							</div>
								: <span className={ classNamesD } onClick={ onToggleDone }>{ label }</span>
						}
						<span className="created">{ formatDistanceToNow(time, { includeSeconds: true }) }</span>
					</label>
					<button 
					className="icon icon-edit"
					onClick={this.editToDo}
					></button>
					<button className="icon icon-destroy" onClick={ onDeleted }></button>
				</div>
			</li>
		);
	}
}
