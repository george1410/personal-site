import React, { Component } from 'react';
import SocialArea from './SocialArea';
import './IntroContainer.css';

class IntroContainer extends Component {
  render() {
    return (
      <section className="intro">
        <div>
          <h1>George McCarron</h1>
          <p>2nd year Computer Science Student. Aspiring Software Engineer.</p>
          <SocialArea/>
        </div>
        <p className="down">Wait - There's More!</p>
      </section>
    )
  }
}

export default IntroContainer;
