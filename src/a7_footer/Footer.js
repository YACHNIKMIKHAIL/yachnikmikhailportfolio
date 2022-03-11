import React from 'react'
import styles from './Footer.module.scss';


function Footer() {
    let items = [
        {
            href: 'https://github.com/YACHNIKMIKHAIL',
            title: 'git'
        },
        {
            href: 'https://www.linkedin.com/in/mikhail-yachnik-91277922b/',
            title: 'linkedIn'
        },
        {
            href: 'https://t.me/krblnj',
            title: 'telegram'
        },
        {
            href: 'https://www.instagram.com/krblnj/',
            title: 'instagram'
        },]
    return (
        <div className={styles.footerContainer}>
            <p className={styles.copyRightBlock}>© 2022, All Rights Reserved.</p>
            <ul>
                {items.map((e, i) => <li key={i}><a href={e.href} target="_blank" rel="noreferrer">{e.title}</a></li>)}
            </ul>
        </div>
    );
}

export default Footer;