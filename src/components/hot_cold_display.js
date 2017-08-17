import React from 'react';
import './hot_cold_display.css';

export default class HotColdDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status:'neutral',
      guessedNumbers: [],
      currentNumber: '',
      randomNumber: ''
    };
  }

  setNumbers () {
    if (this.props.guessed_numbers && this.props.currentNumber && this.props.randomNumber) {
      this.setState.guessedNumbers = {
        guessedNumbers: [...this.props.guessed_numbers],
        currentNumber: this.props.currentNumber,
        randomNumber: this.props.randomNumber
      }
      console.log(this.state); 
    }
  }

  checkNumber() {
    for (var i=0;i < this.state.guessedNumbers.length-1;i++) {
      if (this.state.currentNumber === this.state.guessedNumbers[i]) {
        return true;
      } else {
        continue
      }
    }
    return false;
  }

  // hotOrCold() {
  //   if (this.state.currentNumber >)
  // }


  render() {
    this.setNumbers();

    if (this.checkNumber()) {
      return (
        <div className="hot_cold_container grey">
          <h2>You have already guessed this number</h2>
        </div>
      );
    } else if (this.state.status === 'hot') {
      return (
        <div className="hot_cold_container red">
          <h2>Hotter!</h2>
        </div>
      );
    } else if (this.state.status === 'cold') {
      return (
        <div className="hot_cold_container blue">
          <h2>Colder!</h2>
        </div>
      )
    } else {

      return (
        <div className="hot_cold_container grey">
        </div>
      )
    }



  }


}