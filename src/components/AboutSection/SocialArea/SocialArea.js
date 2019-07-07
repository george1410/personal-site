import React, { Component } from 'react'
import styles from './SocialArea.module.scss';
import axios from 'axios';


export default class SocialArea extends Component {
  state = {
    twitterFollowers: '...'
  };
  
  componentDidMount() {
    axios.get('/api/social')
      .then(res => this.setState({ twitterFollowers: res.data.followerCount }));
  }

  render() {
    return (
      <div>
        <div className={styles.SocialArea}>
          <p>
            I am a big fan of <a href="https://twitter.com/george_mccarron" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            twitter</a>, where I have {this.state.twitterFollowers} followers. I mainly tweet nerd 
            stuff and memes, which is probably the reason why I have no friends 🙃.
          </p>
          <p>
            You can also find me on <a href="https://instagram.com/george_mccarron" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>instagram</a>
            , <a href="https://snapchat.com/add/georgemccarron" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>snapchat</a>,
            and <a href="https://open.spotify.com/user/georgieboy14" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>spotify</a>. 
            I also have <a href="https://linkedin.com/in/george-mccarron-08517690" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>linkedin</a>,
            if you're not so keen on banter...
          </p>
        </div>
      </div>
    )
  }
}
