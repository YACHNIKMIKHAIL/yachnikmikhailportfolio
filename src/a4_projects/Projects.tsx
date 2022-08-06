import React from 'react'
import styles from './Projects.module.scss';
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import imgOne from './../assets/images/seaII.png'
import imgTwo from '../assets/images/sn.png'
import imgThree from '../assets/images/avia.png'
import imgFour from '../assets/images/counter.png'
import imgFive from '../assets/images/mountainII.png'
import imgSix from '../assets/images/samuraiII.png'
import imgSeven from '../assets/images/spaceII.png'
import imgNine from '../assets/images/fridayII.png'
import imgTen from '../assets/images/magII.png'
import imgEleven from '../assets/images/cheesII.png'
import imgTwelve from '../assets/images/RN.png'
import imgThirteen from '../assets/images/scwb/scndwb.png'
import imgFourteen from '../assets/images/mobXShopII.png'
import imgFifteen from '../assets/images/FAA.png'
import imgSixteen from '../assets/images/organizer.png'
import imgSeventeen from '../assets/images/questionsAPPII.png'
import imgEighteen from '../assets/images/DnD.png'
import imgNineteen from '../assets/images/NGtodo.png'
import Slide from "react-reveal";
import s from "./project/Project.module.scss";


function Projects() {
    return (
        <div className={styles.projectsBlock} id='portfolio'>
            <div className={styles.projectsContainer}>
                <Title title={'My portfolio'}/>
                <div className={styles.projects}>
                    <Project
                        bottonTitle={'view project'}
                        title={"SeaTodolist"}
                        img={imgOne}
                        description={"My all new wednesday todolist with redux-thunk pushka-raketa, also with login, and drad&drop =)"}
                        link={"https://seatodolist.herokuapp.com/"}/>
                    <Project
                        bottonTitle={'view project'}
                        title={"SocialNetwork"}
                        img={imgTwo}
                        description={"It is very long way of samurai, very hard & full on pain =("}
                        link={"https://YACHNIKMIKHAIL.github.io/AppSN1.0"}/>

                    <Project
                        bottonTitle={'view project'}
                        title={"AviaTickeds"}
                        img={imgThree}
                        description={"Вёстка- отстой, логика пушка!"}
                        link={"https://YACHNIKMIKHAIL.github.io/Aviasales-"}/>

                    <Project
                        bottonTitle={'view project'}
                        title={"Counter"}
                        img={imgFour}
                        description={"My second counter - Space Counter) Disabled buttons, red errors, all as you would like!"}
                        link={"https://YACHNIKMIKHAIL.github.io/CounterVol2"}/>

                    <Project
                        bottonTitle={'view project'}
                        title={"Mountain todolist"}
                        img={imgFive}
                        description={"Working at 'Mountaint todolist', I can sau that it's so funny, building projects)"}
                        link={"https://YACHNIKMIKHAIL.github.io/mountainTodolist"}/>

                    <Project
                        bottonTitle={'view project'}
                        title={"Samurai todolist"}
                        img={imgSix}
                        description={"Tap on image to discover 'Samurai todo list'  I fought whith my fear in this project."}
                        link={"https://YACHNIKMIKHAIL.github.io/SamuraiTodolist"}/>

                    <Project
                        bottonTitle={'view project'}
                        title={"Space todolist"}
                        img={imgSeven}
                        description={"Space todolist my favorit project."}
                        link={"https://YACHNIKMIKHAIL.github.io/SpaceTodolist"}/>

                    <Project
                        bottonTitle={'view project'}
                        title={"Our team project =) "}
                        img={imgNine}
                        description={"I like work in team. It's like Olympic games...Only my team should win!!!"}
                        link={"https://YACHNIKMIKHAIL.github.io/IFriday"}/>
                    <Project
                        bottonTitle={'view project'}
                        title={"MagazineShop"}
                        img={imgTen}
                        description={"My first full-stack project realised with express, mongoDB, react & nodeJS. It is difficult, but not hard, I like it =)"}
                        link={"https://test-learning-mag-app.herokuapp.com/"}/>
                    <Project
                        bottonTitle={'view project'}
                        title={"REACT Chess"}
                        img={imgEleven}
                        description={"First big project after moving to another country. Stack: JS,TS. `Based on the principles of Object Oriented Programming"}
                        link={"https://yachnikmikhail.github.io/Moje-szachy/"}/>
                    <Project
                        bottonTitle={'view project'}
                        title={"MagazineShop MOBILE APP"}
                        img={imgTwelve}
                        description={"My first full-stack project rewritten on REACT-NATIVE, with requests on Heroku " +
                            "& redux-toolkit"}
                    />


                    <Project
                        bottonTitle={'link to git'}
                        title={"Some test project"}
                        img={imgThirteen}
                        description={"Created on react class component/ real old-school =) TS, StyledComponent, " +
                            "deprecated Hocs at appoloGraphQL connection. Pain & Happiness in the same project / bbbra!"}
                        link={"https://github.com/YACHNIKMIKHAIL/bwdncs-tst"}/>

                    <Slide bottom>
                        <div className={s.project}>
                            <div className={s.img} style={{backgroundImage: `url(${imgFourteen})`}}>
                                <div className={s.overlay}>
                                    <div className={s.description}>
                                        <h3>{"SHOP"}</h3>
                                        <a href={'https://github.com/YACHNIKMIKHAIL/play-with-U-mbxFrnt'}
                                           style={{color: 'white'}}
                                           target="_blank" rel="noreferrer">
                                            Front:</a>
                                        <p>React,TypeScript,mobX,bootstrap.</p>
                                        <a href={'https://github.com/YACHNIKMIKHAIL/play-with-U-psgrsql'}
                                           style={{color: 'white'}}
                                           target="_blank" rel="noreferrer">
                                            Back:</a>
                                        <p> Express, postgreSQL, jwtToken authorization</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <Project
                        bottonTitle={'view project'}
                        title={"Angular-app"}
                        img={imgFifteen}
                        description={"My first experience with angular. ng g c, pipes, rxJs & tailwind."}
                        link={"https://yachnikmikhail.github.io/playANGLR/"}/>
                    <Project
                        bottonTitle={'view project'}
                        title={"Angular-organizer"}
                        img={imgSixteen}
                        description={"Only framework & scss. Firebase/DB is connected for tasks"}
                        link={"https://yachnikmikhail.github.io/organizer/"}/>
                    <Project
                        bottonTitle={'link to gitRepo'}
                        title={"Ask-me-app"}
                        img={imgSeventeen}
                        description={"Single app wrote on pure JS. Connected to Firebase with authorisation..."}
                        link={"https://github.com/YACHNIKMIKHAIL/AskMeApp"}/>
                    <Project
                        bottonTitle={'view'}
                        title={"DnD"}
                        img={imgEighteen}
                        description={"Played with DnD on pure REACT, in waiting my dream offer..."}
                        link={"https://yachnikmikhail.github.io/UdrgNdrp/"}/>

                    <Project
                        bottonTitle={'view project'}
                        title={"Small NG-todo"}
                        img={imgNineteen}
                        description={"NG-todo, realized with pipes & httpCli/get request. Base CRUD operations."}
                        link={"https://yachnikmikhail.github.io/playWithNG/"}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
