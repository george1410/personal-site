import React from 'react';
import styles from './TitledArea.module.scss';

function TitledArea(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titlepart}>
        <h4 className={styles.title}>
          {props.title}
        </h4>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>


    </div>
  )
}

export default TitledArea;