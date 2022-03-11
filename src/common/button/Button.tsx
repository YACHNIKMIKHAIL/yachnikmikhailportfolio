import React from 'react'
import styles from './Button.module.scss';

type ButtonType = {
    title: string
    click: () => void
}

function Button({title, click}: ButtonType) {
    return <div>
        <button className={styles.button} onClick={click}>
            {title}
        </button>
    </div>
}

export default Button;