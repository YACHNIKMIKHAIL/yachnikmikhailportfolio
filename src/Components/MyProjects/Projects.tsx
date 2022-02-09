import React from 'react';
import styled from "styled-components";
import Project1 from "./Project1/Project1";
import spaceImg from './../Images/Projects/Screenshot 2022-01-05 at 21.14.16.png'
import spaceImg1 from './../Images/Projects/Screenshot 2022-01-05 at 21.16.48.png'
import spaceImg2 from './../Images/Projects/Screenshot 2022-01-05 at 21.20.19.png'
import spaceImg3 from './../Images/Projects/Screenshot 2022-01-10 at 14.50.59.png'
import spaceImg4 from './../Images/Projects/Screenshot 2022-01-20 at 13.13.35.png'
import spaceImg5 from './../Images/Projects/Screenshot 2022-02-09 at 11.19.21.png'
import Head from "../Head/Head";

const Projects = () => {
    return (
        <ProjectsCase id={'projects'}>
            <ContainerCase>
               <Head title={'My super projects'} color={'#00d0fd'}/>
                <BlockCase>
                    <Project1 title={'Space todolist'}
                              description={`Tap on image to discover 'Space todolist' my favorit project.`}
                              image={spaceImg2}
                              link={'https://YACHNIKMIKHAIL.github.io/SpaceTodolist'}/>
                    <Project1 title={'Samurai todo list'}
                              description={`Tap on image to discover 'Samurai todo list'  I fought whith my fear in this project.`}
                              image={spaceImg1}
                              link={'https://YACHNIKMIKHAIL.github.io/SamuraiTodolist'}/>
                    <Project1 title={'Mountain todolist'}
                              description={`Working at 'Mountaint todolist', I can sau that it's so funny, building projects. Tap on image to discover)`}
                              image={spaceImg}
                              link={'https://YACHNIKMIKHAIL.github.io/mountainTodolist'}/>
                    <Project1 title={'Counter'}
                              description={`My second counter - Space Counter) Disabled buttons, red errors, all as you would like!`}
                              image={spaceImg3}
                              link={'https://YACHNIKMIKHAIL.github.io/CounterVol2'}/>
                    <Project1 title={'AviaTickeds'}
                              description={`Вёстка- отстой, логика пушка!`}
                              image={spaceImg4}
                              link={'https://YACHNIKMIKHAIL.github.io/Aviasales-'}/>
                    <Project1 title={'SeaTodolist'}
                              description={`My all new wednesday todolist with redux-thunk pushka-raketa`}
                              image={spaceImg5}
                              link={'https://YACHNIKMIKHAIL.github.io/SeaTodolist'}/>
                </BlockCase>
            </ContainerCase>
        </ProjectsCase>
    );
};

export default Projects;

const ProjectsCase = styled.div`
  background-color: rgba(34, 39, 94, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1em 0 0 0;
`
const ContainerCase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //min-height: 100vh;
  width: 100%;

`
const BlockCase = styled.div`
  max-height: content-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
