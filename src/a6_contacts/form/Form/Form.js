import React from 'react'
import styles from './Form.module.scss';


function Form() {
    return (
        <form className={styles.form}>
            <div className={styles.inputBlock}>
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Your Email"/>
            </div>
            <textarea placeholder="Your Message"/>
            <button className={styles.btn}>
                Send Message
            </button>
        </form>
    );
}

export default Form;