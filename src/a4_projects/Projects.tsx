import React from 'react'
import styles from './Projects.module.scss';
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import imgOne from './../assets/images/sea.png'
import imgTwo from '../assets/images/sn.png'
import imgThree from '../assets/images/avia.png'
import imgFour from '../assets/images/counter.png'
import imgFive from '../assets/images/mountain.png'
import imgSix from '../assets/images/samurai.png'
import imgSeven from '../assets/images/space.png'
import imgNine from '../assets/images/friday.png'
import imgTen from '../assets/images/mag.png'


function Projects() {
    return (
        <div className={styles.projectsBlock} id='portfolio'>
            <div className={styles.projectsContainer}>
                <Title title={'My portfolio'}/>
                <div className={styles.projects}>
                    <Project
                        title={"SeaTodolist"}
                        img={imgOne}
                        description={"My all new wednesday todolist with redux-thunk pushka-raketa, also with login, and drad&drop =)"}
                        link={"https://seatodolist.herokuapp.com/"}/>
                    <Project
                        title={"SocialNetwork"}
                        img={imgTwo}
                        description={"It is very long way of samurai, very hard & full on pain =("}
                        link={"https://YACHNIKMIKHAIL.github.io/AppSN1.0"}/>

                    <Project
                        title={"AviaTickeds"}
                        img={imgThree}
                        description={"Вёстка- отстой, логика пушка!"}
                        link={"https://YACHNIKMIKHAIL.github.io/Aviasales-"}/>

                    <Project
                        title={"Counter"}
                        img={imgFour}
                        description={"My second counter - Space Counter) Disabled buttons, red errors, all as you would like!"}
                        link={"https://YACHNIKMIKHAIL.github.io/CounterVol2"}/>

                    <Project
                        title={"Mountain todolist"}
                        img={imgFive}
                        description={"Working at 'Mountaint todolist', I can sau that it's so funny, building projects)"}
                        link={"https://YACHNIKMIKHAIL.github.io/mountainTodolist"}/>

                    <Project
                        title={"Samurai todolist"}
                        img={imgSix}
                        description={"Tap on image to discover 'Samurai todo list'  I fought whith my fear in this project."}
                        link={"https://YACHNIKMIKHAIL.github.io/SamuraiTodolist"}/>

                    <Project
                        title={"Space todolist"}
                        img={imgSeven}
                        description={"Space todolist my favorit project."}
                        link={"https://YACHNIKMIKHAIL.github.io/SpaceTodolist"}/>

                    <Project
                        title={"Our team project =) "}
                        img={imgNine}
                        description={"I like work in team. It's like Olympic games...Only my team should win!!!"}
                        link={"https://YACHNIKMIKHAIL.github.io/IFriday"}/>
                    <Project
                        title={"MagazineShop"}
                        img={imgTen}
                        description={"My first full-stack project realised with express, mongoDB, react & nodeJS. It is difficult, but not hard, I like it =)"}
                        link={"https://test-learning-mag-app.herokuapp.com/"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;