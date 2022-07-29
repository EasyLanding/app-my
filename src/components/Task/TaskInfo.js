import React, { Component,useState } from 'react';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';

export default class TaskInfo extends Component {
    state = {
		edit: false,
		secondsElapsed: 122
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

	getHours ()
	{
		return ("0" + Math.round(this.state.secondsElapsed / 3600)).slice(-2);
	}

	getMinutes ()
	{
		return ("0" + Math.round((this.state.secondsElapsed % 3600) / 60)).slice(
			-2
		);
	}

	getSeconds ()
	{
		return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
	}

	startTime ()
	{
		var _this = this;
		this.countdown = setInterval(function ()
		{
			_this.setState({ secondsElapsed: _this.state.secondsElapsed - 1 });
		}, 1000);
	}

	pauseTime ()
	{
		clearInterval(this.countdown);
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
						<span class="description">
							<button 
							onClick={ () => this.startTime() }
							className="icon-play"
							></button>
							<button 
							onClick={ () => this.pauseTime() }
							className="icon-pause"></button>
							<p className="timeTask">{ this.getHours() }:{ this.getMinutes() }:{ this.getSeconds() }</p>
						</span>
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
