import React from 'react'
import styles from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {faBriefcase, faLaptopCode, faTasks} from "@fortawesome/free-solid-svg-icons";
import {faSketch} from "@fortawesome/free-brands-svg-icons";


function Skills() {
    return (
        <div className={styles.skillsBlock} id='skills'>
            <div className={styles.skillsContainer}>
                <Title title={'My Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'DEVELOPMENT'} description={"ANGULAR / REACT"} titleIcon={faLaptopCode}/>
                    <Skill title={'FOUNDATION'} description={"JavaScript / TypeScript"} titleIcon={faBriefcase}/>
                    <Skill title={'TESTING'} description={"Jasmine / Jest"} titleIcon={faTasks}/>
                    <Skill title={'DESIGN'} description={"Angular Material / Material UI"} titleIcon={faSketch}/>
                </div>
            </div>
        </div>
    );
}

export default Skills
