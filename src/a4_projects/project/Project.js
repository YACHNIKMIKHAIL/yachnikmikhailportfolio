import React from 'react'
import s from './Project.module.scss';
import Slide from "react-reveal";

export const Project = ({img, description, link, title}) => {
    return (
        <Slide bottom>
            <div className={s.project}>
                <div className={s.img} style={{backgroundImage: `url(${img})`}}>
                    <div className={s.overlay}>
                        <div className={s.description}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <a href={link} className={s.btn} target="_blank" rel="noreferrer">view project</a>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

