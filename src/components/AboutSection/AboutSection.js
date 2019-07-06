import React from 'react';
import TitledArea from '../TitledArea/TitledArea';
import SkillsArea from './SkillsArea/SkillsArea';
import SocialArea from './SocialArea/SocialArea';

function AboutSection() {
  return (
    <div id="about">
    <TitledArea title="Intro">
      <p>
        My name is George McCarron and I'm currently studying Computer Science at the University 
        of Nottingham. I have a particular interest in building high quality, reliable &amp;
        scalable web applications using modern technologies.
      </p>
    </TitledArea>
    <TitledArea title="Skills">
      <SkillsArea />
    </TitledArea>
    <TitledArea title="Skills">
      <SocialArea />
    </TitledArea>
    </div>
  )
}

export default AboutSection;
