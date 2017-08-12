import React from 'react';
import './input.css';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div className="input">
          <label for="hot_cold_input">Guess the Number</label>
          <input type="text" id="hot_cold_input"/>
        </div>
      )
    }

  }
