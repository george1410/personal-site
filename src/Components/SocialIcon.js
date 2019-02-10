import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialIcon.css';

class SocialIcon extends Component {
  render() {
    const { account } = this.props;
    return (
      <a href={account.url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', account.icon]}/>
      </a>
    )
  }
}

export default SocialIcon;