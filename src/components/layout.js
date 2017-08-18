import React, { Component } from 'react';
import logo from '../logo.svg';
import './layout.css';
import Input from './input';
import HotColdDisplay from './hot_cold_display';

export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input:'',
      currentNumber:'',
      randomNumber:Math.round(Math.random() * 100),
      guessedNumbers: []
    }
    
    this.collectInput = this.collectInput.bind(this);

  }


  collectInput(event) {
    event.preventDefault();
    let input = event.target.value;
    console.log(input);
    this.setState({
      input:input,
      
    })
    // this.state.guessedNumbers.push(input);
    // this.state.input = input;
    // setting state directly works but setState doesn't??
    
    
    console.log(this.state);
  }

  validateInput() {
    const numTest = new RegExp(/^\d+$/);
    if (numTest.test(this.state.input) && this.state.input > 0 && this.state.input < 100 ) {
      this.setState({currentNumber:this.state.input})
    } else {
      console.log('the input entered was invalid');
    }
  }

  render() {
    console.log(this.state.randomNumber);
    setTimeout(function() {
    console.log('this is the input in the state', this.state);

    }, 1000)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hot and Cold</h2>
        </div>
        < Input onChange={this.collectInput}/>
        < HotColdDisplay  randomNumber={this.state.randomNumber} currentNumber={this.state.currentNumber}/>
      </div>
    );
  }
}
