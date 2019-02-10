import React, { Component } from 'react';
import accounts from '../socialAccounts';
import SocialIcon from './SocialIcon';
import './SocialArea.css';

class SocialArea extends Component {
  render() {
    return (
      <ul>
        {accounts.map(account => (
          <li>
            <SocialIcon
              account = {account}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default SocialArea;
