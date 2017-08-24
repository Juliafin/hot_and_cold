import React from 'react';
import './numberdisplay.css';

export default function NumberDisplay (props) {
  const numbersToDisplay = props.numbers.map( (number, index) => {
    return (
      <div key={index} className={`popIn number ${props.colors[index]}`}>
        <h3>{number}</h3>
      </div>
    );
  })

  return (
    <div className="number_display">
      {numbersToDisplay}
    </div>
  )
}