import React, { Component } from 'react';
import styles from './TimeMachine.module.scss';
import Button from './Button';
import Content from './Content';

export default class TimeMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({
      active: index
    });
  }
  
  render() {
    const buttons = ['Capital One', 'UoN', 'DGS 6th Form', 'DGS'];

    return (
      <div className={styles.timeMachine}>
        <div className={styles.navigation}>
          {buttons.map((button, index) =>
            <Button 
              key={index}
              index={index}
              active={this.state.active} 
              onClick={this.handleClick}>{button}</Button>
          )}
        </div>
        <Content 
          active={this.state.active} />
      </div>
    )
  }
}
