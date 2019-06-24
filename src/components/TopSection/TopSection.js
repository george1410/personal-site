import React from 'react';
import styles from './TopSection.module.scss';
import ButtonLink from '../ButtonLink/ButtonLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TopSection() {
  return (
    <div>
      <h1 className={styles.intro}>i'm <span className={styles.name}>George McCarron</span>, a computer science student and aspiring software engineer with big ideas</h1>
      <ButtonLink url="mailto:hello@georgemccarron.com">
        Mail Me <FontAwesomeIcon icon={['far', 'paper-plane']} />
      </ButtonLink>
    </div>
  );
}

export default TopSection;