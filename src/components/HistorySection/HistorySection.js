import React, { Component } from 'react';
import TitledArea from '../TitledArea/TitledArea';
import TimeMachine from './TimeMachine/TimeMachine';
import styles from './HistorySection.module.scss';

export default class HistorySection extends Component {
  render() {
    return (
      <div id="history" className={styles.container}>
        <TitledArea title="Timeline">
          <TimeMachine/>
        </TitledArea>
      </div>
    )
  }
}
