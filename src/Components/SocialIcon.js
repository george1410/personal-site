import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialIcon.module.css';

class SocialIcon extends Component {
  render() {
    const { account } = this.props;
    return (
      <a className={styles.a} href={account.url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', account.icon]}/>
      </a>
    )
  }
}

export default SocialIcon;