import React, { Component } from 'react';
import IntroContainer from './IntroContainer';
import AboutContainer from './AboutContainer';

class Page extends Component {
  render() {
    return (
      <>
        <IntroContainer />
        <AboutContainer />
      </>
    )
  }
}

export default Page;
