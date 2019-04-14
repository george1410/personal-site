import React, { Component } from 'react';
import styles from './EducationBlock.module.css';
import ToggleButton from './ToggleButton';

class EducationBlock extends Component {
    state = {
        expanded: false
    }

    handleExpandButtonClick = () => {
        this.setState(currentState => ({
            expanded: !currentState.expanded
        }));
    }

    render() {
        const { education } = this.props;
        return (
            <>
                <h4 className={styles.schoolName}>{education.school} <span>{education.dates}</span></h4>
                <p className={styles.eduSubTitle}>{education.qualification}, {education.grades}</p>
                <ToggleButton onExpandButtonClick={this.handleExpandButtonClick}/>
                {   
                    this.state.expanded &&
                    <p>expanded.</p>
                }
            </>
        )
    }
}

export default EducationBlock;