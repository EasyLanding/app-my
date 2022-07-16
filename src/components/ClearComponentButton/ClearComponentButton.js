import React, { Component } from 'react'
import '../Footer/Footer.css'

export default class ClearComponentButton extends Component {
  render() {
    const { onClearChange } = this.props;
    return (
      <button className="clear-completed" key={'abcdf'} onClick={() => onClearChange()}>
        {' '}
        Clear completed
      </button>
    );
  }
}
