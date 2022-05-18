import React from 'react'
import s from './Project.module.scss';
import Slide from "react-reveal";

type ProjectType = {
    img: string
    description: string
    link?: string
    title: string
}
export const Project = ({img, description, link, title}: ProjectType) => {
    return (
        <Slide bottom>
            <div className={s.project}>
                <div className={s.img} style={{backgroundImage: `url(${img})`}}>
                    <div className={s.overlay}>
                        <div className={s.description}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            {link && <a href={link} className={s.btn} target="_blank" rel="noreferrer">view project</a>}
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

