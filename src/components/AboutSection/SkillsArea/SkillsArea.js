import React from 'react';
import styles from './SkillsArea.module.scss';

function SkillsArea() {
  return (
    <div className={styles.skillsarea}>
      <div className={styles.col}>
        <h5>Languages</h5>
        <ul className={styles.list}>
          <li>JavaScript (ES6)</li>
          <li>PHP</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Java</li>
          <li>Haskell</li>
          <li>C</li>
          <li>C++</li>
        </ul>
      </div>

      <div className={styles.col}>
        <h5>Frameworks</h5>
        <ul className={styles.list}>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Jest</li>
          <li>JUnit</li>
        </ul>
      </div>

      <div className={styles.col}>
        <h5>Tools</h5>
        <ul className={styles.list}>
          <li>Git / GitHub</li>
          <li>Travis CI</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>Bash</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillsArea;