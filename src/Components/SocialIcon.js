import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialIcon extends Component {
  render() {
    const { account } = this.props;
    return (
      <a href={account.service}>
        <FontAwesomeIcon icon={['fab', account.icon]}/>
      </a>
    )
  }
}

export default SocialIcon;