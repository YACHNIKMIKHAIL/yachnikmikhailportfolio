import React from 'react'
import styles from './DataBlock.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function DataBlock({iconTitle, contactTitle, data, a}) {
    return (<div className={styles.dataBlock}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={iconTitle}/>
            </div>
            <div className={styles.description}>
                <h4>{contactTitle}</h4>
                <a href={a}>{data}</a>
            </div>
        </div>
    );
}

export default DataBlock;