import React, { Component } from 'react';
import styles from './ToggleButton.module.css';

class ToggleButton extends Component {
    render() {
        return (
            <button className={styles.toggleButton} onClick={this.props.onExpandButtonClick}>See Details</button>
        )
    }
}

export default ToggleButton;
