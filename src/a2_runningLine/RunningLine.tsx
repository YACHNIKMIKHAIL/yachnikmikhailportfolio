import React from 'react'
import Marquee from 'react-double-marquee';
import styles from './RunningLine.module.scss';


function RunningLine() {
    return (
        <div className={'ourNth'}>
            <div className={styles.runningLineBlock}>
                <Marquee direction={'left'} speed={0.06}>
                    CODING&&LOVE&&PEACE&&
                </Marquee>
            </div>
        </div>
    );
}


export default RunningLine;