import React from 'react';
import './App.module.scss';
import TopSection from './components/TopSection/TopSection';
import Section from './components/Section/Section';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import NavBar from './components/NavBar/NavBar';
import AboutSection from './components/AboutSection/AboutSection';
import HistorySection from './components/HistorySection/HistorySection';

library.add(faPaperPlane);


function App() {
  return (
    <>
      <NavBar/>
      <Section>
        <TopSection />
      </Section>
      <Section>
        <AboutSection/>
      </Section>
      <Section>
        <HistorySection/>
      </Section>
    </>
  );
}


export default App;
