import React from 'react'
import Marquee from 'react-double-marquee';
import styles from './RunningLine.module.scss';


function RunningLine() {
    return (
        <div className={'ourNth'}>
            <div className={styles.runningLineBlock}>
                <Marquee direction={'left'} speed={0.06}>
                    angular &#8592; angular &#8592; angular &#8592;
                </Marquee>
            </div>
        </div>
    );
}


export default RunningLine;
