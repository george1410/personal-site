import React, { Component } from 'react';
import accounts from '../socialAccounts';
import SocialIcon from './SocialIcon';

class SocialArea extends Component {
  render() {
    return (
      accounts.map(account => (
        <SocialIcon
          account = {account}
        />
      ))
    );
  }
}

export default SocialArea;
