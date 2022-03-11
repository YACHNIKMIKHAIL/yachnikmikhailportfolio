import React from 'react'
import styles from './Title.module.scss';


type TitleType = {
    title: string
}

function Title({title}: TitleType) {
    return <div>
        <h2 className={styles.title}>{title} </h2>
    </div>
}

export default Title;