import React, { Component } from 'react'
import styles from './SocialArea.module.scss';
import axios from 'axios';


export default class SocialArea extends Component {
  state = {
    twitterFollowers: 'Loading...'
  };
  
  componentDidMount() {
    axios.get('/api/social')
      .then(res => this.setState({ twitterFollowers: res.data.followerCount }));
  }

  render() {
    return (
      <div>
        <div className={styles.SocialArea}>
          Twitter followers: {this.state.twitterFollowers}
        </div>
      </div>
    )
  }
}
