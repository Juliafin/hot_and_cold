import React from 'react';
import './hot_cold_display.css';

export default class HotColdDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status:'neutral',
      class: ['hot_cold_container']
      
    };  
  }

  render() {
  
      return (
      <div className={this.state.class + ' ' + this.props.class}>
        <h2>{this.props.message}</h2>
      </div>
      )
  }

}