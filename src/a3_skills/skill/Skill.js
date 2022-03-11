import React from 'react'
import styles from './Skill.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Skill({title, description, titleIcon}) {
    return (
        <div className={styles.skill}>
            <div className={styles.image}>
                <FontAwesomeIcon icon={titleIcon} className={styles.icon}/>
            </div>
            <h5>{title}</h5>
            <hr className={styles.hR}/>
            <p>{description}</p>
        </div>
    );
}

export default Skill