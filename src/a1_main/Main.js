import React from 'react'
import styles from './Main.module.scss';
import photo from '../assets/images/photo.jpg'


function Main() {

    return (
        <div className={styles.mainBlock} id='home'>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <h5>Hi, I am</h5>
                    <h1>MIKHAIL YACHNIK</h1>
                    <h3>Front-end Developer</h3>
                    <h4>Dreamer</h4>
                    <h5>Father</h5>
                    <h6>FixedGear rider</h6>
                    {/*<a href={cv} download={true}>
                        <Button title={'download my cv'}/>
                    </a>*/}
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt="it's me"/>
                </div>
            </div>
        </div>
    );
}

export default Main;