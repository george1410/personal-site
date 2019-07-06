import React from 'react';
import styles from './ButtonLink.module.scss';

function ButtonLink(props) {
  return (
    <a className={styles.button} href={props.url}>
      {props.children}
    </a>
  );
}

export default ButtonLink;