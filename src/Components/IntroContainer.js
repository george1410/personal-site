import React, { Component } from 'react';
import SocialArea from './SocialArea';
import styles from './IntroContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class IntroContainer extends Component {
  render() {
    return (
      <section className={styles.intro}>
        <div>
          <h1 className={styles.mainTitle}>George McCarron</h1>
          <p className={styles.tagline}>Second Year Computer Science Student. Aspiring Software Engineer.</p>
          <SocialArea/>
        </div>
        <a href="#about" className={styles.down}>
          <FontAwesomeIcon icon="chevron-circle-down"/>
        </a>
      </section>
    )
  }
}

export default IntroContainer;
