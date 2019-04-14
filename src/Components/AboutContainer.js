import React, { Component } from 'react';
import styles from './AboutContainer.module.css';
import EducationBlock from './EducationBlock';

class AboutContainer extends Component {
  render() {
    const educationArr = [
      {
        school: 'University of Nottingham',
        dates: '2017 - Present',
        qualification: 'BSc (Hons) Computer Science',
        grades: 'First Year: First Class (92%)'
      },
      {
        school: 'Dartford Grammar Sixth Form',
        dates: '2015 - 2017',
        qualification: 'IB Diploma',
        grades: '40 Points'
      },
      {
        school: 'Dartford Grammar School',
        dates: '2010 - 2015',
        qualification: 'GCSEs',
        grades: '9A*, 3A'
      }
    ]

    return (
      <section className={styles.root} id="about">
        <h2 className={styles.sectionTitle}>About</h2>
        <p className={styles.bio}>I'm George McCarron, currently in my second year studying computer science student at the University of Nottingham. I have an interest in modern web development and building applications for mobile devices, but have experience in many areas of software engineering.</p>
        <div className={styles.splitArea}>
          <div className={styles.half}>
            <h3 className={styles.subsectionTitle}>Education</h3> 
            {educationArr.map(education => (
              <EducationBlock education={education} key={education.school}/>
            ))}
          </div>
          <div className={styles.half}>
            <h3 className={styles.subsectionTitle}>Skills</h3>
          </div>
        </div>
      </section>
    )
  }
}

export default AboutContainer;