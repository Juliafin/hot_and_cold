import React from 'react';
import './input.css';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div className="input">
          <form onSubmit={(event) => {event.preventDefault()}}>
          <label htmlFor="hot_cold_input">Guess the Number</label>
          <input type="text" id="hot_cold_input" onChange={(event) => {this.props.onChange(event)}}/>
          <button onClick={(event) => {this.props.onClick(event)}} >Submit</button>
          </form>
        </div>
      )
    }

  }
