import React from 'react';
import TitledArea from '../TitledArea/TitledArea';
import SkillsArea from './SkillsArea/SkillsArea';

function AboutSection() {
  return (
    <div id="about">
    <TitledArea title="Intro">
      <p>
        My name is George McCarron and I'm currently studying Computer Science at the University 
        of Nottingham. I have a particular interest in building high quality, scalable web 
        applications.
      </p>
    </TitledArea>
    <TitledArea title="Skills">
      <SkillsArea />
    </TitledArea>
    </div>
  )
}

export default AboutSection;
