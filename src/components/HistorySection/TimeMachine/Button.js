import React, { Component } from 'react';
import styles from './Button.module.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    let active = this.props.active === this.props.index;
    return (
      <button 
        className={styles.button + (active ? (' ' + styles.active) : '')}
        onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}

Button.defaultProps = {
  active: false
};