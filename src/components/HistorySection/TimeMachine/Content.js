import React, { Component } from 'react'
import styles from './Content.module.scss';

export default class Content extends Component {
  render() {
    const data = [
      {
        type: 'work',
        place: 'Capital One',
        title: 'Software Engineering Intern (Web)',
        dates: '2019 - Now'
      },
      {
        type: 'education',
        place: 'University of Nottingham',
        title: 'BSc (Hons) Computer Science',
        dates: '2017 - Now'
      },
      {
        type: 'education',
        place: 'Dartford Grammar 6th Form',
        title: 'International Baccalaureate (IB) Diploma',
        dates: '2015 - 2017'
      },
      {
        type: 'education',
        place: 'Dartford Grammar School',
        title: 'GCSEs',
        dates: '2010 - 2015'
      }
    ];

    return (
      <div className={styles.timeMachineContent}>
        <h5 className={styles.place}>{data[this.props.active].place}</h5>
        <div className={styles.title}>{data[this.props.active].title}</div>
        <div className={styles.dates}>{data[this.props.active].dates}</div>
      </div>
    )
  }
}
