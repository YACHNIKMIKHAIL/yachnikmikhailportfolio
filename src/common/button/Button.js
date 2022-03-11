import React from 'react'
import styles from './Button.module.scss';


function Button({title, click}) {
    return <div>
        <button className={styles.button} onClick={click}>
            {title}
        </button>
    </div>
}

export default Button;