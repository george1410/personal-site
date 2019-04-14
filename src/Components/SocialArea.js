import React, { Component } from 'react';
import accounts from '../socialAccounts';
import SocialIcon from './SocialIcon';
import styles from './SocialArea.module.css';

class SocialArea extends Component {
  render() {
    return (
      <ul className={styles.ul}>
        {accounts.map(account => (
          <li className={styles.li} key={account.url}>
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
