import React, { Component } from 'react';
import './layout.css';
import Input from './input';
import HotColdDisplay from './hot_cold_display';
import NumberDisplay from './numberDisplay';

export default class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input:'',
      currentNumber:'',
      randomNumber:Math.round(Math.random() * 100),
      guessedNumbers: [],
      colors: [],
      guessedCorrectly: ''
    }
    
    this.collectInput = this.collectInput.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.resetState = this.resetState.bind(this);

  }

// collects input from the 
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

numberExists(currentNumber) {
    for (var i=0;i < this.state.guessedNumbers.length;i++) {
      console.log(this.state.guessedNumbers[i], currentNumber);
      if (currentNumber === this.state.guessedNumbers[i]) {
        return true;
      } else {
        continue
      }
    }
    return false;
  }



  hotOrCold() {

    let randomToCurrentDistance = Math.abs(this.state.randomNumber - this.state.input);
    let randomToPreviousDistance = Math.abs(this.state.randomNumber - this.state.guessedNumbers[this.state.guessedNumbers.length-1]);
    console.log(randomToCurrentDistance, 'random to current distance', randomToPreviousDistance, 'random to previous distance')

    
    
    if (randomToCurrentDistance < randomToPreviousDistance && this.state.guessedNumbers.length > 1 ) {
      return 'hotter'
    }
    else if (randomToCurrentDistance > randomToPreviousDistance && this.state.guessedNumbers.length > 1 ) {
      return 'colder'
    }
    else if (randomToCurrentDistance > 15) {
      return 'cold'
    }
    else if (randomToCurrentDistance <= 15) {
      return 'hot'
    } 
  }


  validateInput() {
    let input = parseInt(this.state.input, 10);
    const numTest = new RegExp(/^\d+$/);
    console.log('input', input, 'random number', this.state.randomNumber)

    if (numTest.test(input) && input > 0 && input < 101) {
      if (!this.numberExists(input)) {

        if (input === this.state.randomNumber) {
          this.setState({
            guessedNumbers:[...this.state.guessedNumbers, input],
            message:'You have guessed the correct number!',
            guessedCorrectly:true,
            currentNumber: input,
            class: 'green',
            colors: this.state.colors.length ? [...this.state.colors, 'green'] : ['green']
          })
        }
        
        else if (this.hotOrCold() === 'hot') {
        this.setState({
          guessedNumbers:[...this.state.guessedNumbers, input],
          message: 'Hot!',
          class: 'red',
          currentNumber: input,
          colors: this.state.colors.length ? [...this.state.colors, 'red'] : ['red']
        })

        } else if (this.hotOrCold() === 'hotter') {
        this.setState({
          guessedNumbers:[...this.state.guessedNumbers, input],
          message: 'Getting Hotter!',
          class: 'red',
          currentNumber: input,
          colors: this.state.colors.length ? [...this.state.colors, 'red'] : ['red']
        })

        } else if (this.hotOrCold() === 'cold') {
          this.setState({
          guessedNumbers:[...this.state.guessedNumbers, input],
          message: 'Cold!',
          class: 'blue',
          currentNumber: input,
          colors: this.state.colors.length ? [...this.state.colors, 'blue'] : ['blue']
        })
        }

        else if (this.hotOrCold() === 'colder') {
          this.setState({
          guessedNumbers:[...this.state.guessedNumbers, input],
          message: 'Getting Colder!',
          class: 'blue',
          currentNumber: input,
          colors: this.state.colors.length ? [...this.state.colors, 'blue'] : ['blue']
        })
        }


      } else {
        this.setState({
          message: 'The number has already been guessed.',
          class: 'grey',
          currentNumber: input
        })
        
      }


    } else {
      console.log('the input entered was invalid');
      this.setState({
        message:"Please enter a number between 1 to 100.",
        class: 'grey',
        currentNumber: input
      });
      return;
    }
  }

  resetState(event) {
    event.preventDefault();
    this.setState({
      input:'',
      currentNumber:'',
      randomNumber:Math.round(Math.random() * 100),
      guessedNumbers: [],
      colors: [],
      guessedCorrectly: '',
      message: 'New game!',
      class: 'purple'
    })
  }

  

  render() {
    console.log(this.state.randomNumber);
    setTimeout(function() {
    console.log('this is the input in the state', this.state);
    }, 1000);

    if (this.state.guessedCorrectly) {
      return (
        <div className="App">
        <div className="App-header">
          <h2>Hot and Cold</h2>
        </div>
        < Input onChange={this.collectInput} onClick={this.validateInput}/>
        <button onClick={(event) => {this.resetState(event)}}>Play Again?</button>
        < HotColdDisplay message={this.state.message} class={this.state.class}/>
        < NumberDisplay colors={this.state.colors} numbers={this.state.guessedNumbers}/>
        </div>
      )
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Hot and Cold</h2>
        </div>
        < Input onChange={this.collectInput} onClick={this.validateInput}/>
        < HotColdDisplay message={this.state.message} class={this.state.class}/>
        < NumberDisplay colors={this.state.colors} numbers={this.state.guessedNumbers}/>
      </div>
    );
  }
}
