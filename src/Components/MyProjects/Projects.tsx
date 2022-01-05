import React from 'react';
import styled from "styled-components";
import Project1 from "./Project1/Project1";
import spaceImg from './../Images/Projects/Screenshot 2022-01-05 at 21.14.16.png'
import spaceImg1 from './../Images/Projects/Screenshot 2022-01-05 at 21.16.48.png'
import spaceImg2 from './../Images/Projects/Screenshot 2022-01-05 at 21.20.19.png'

const Projects = () => {
    return (
        <ProjectsCase>
            <ContainerCase>
                <h2 style={{color: '#00d0fd'}}>My Super Projects</h2>
                <BlockCase>
                    <Project1 title={'project 1'}
                              description={'Space todolist'}
                              image={spaceImg2}
                              link={'https://YACHNIKMIKHAIL.github.io/SpaceTodolist'}/>
                    <Project1 title={'project 2'}
                              description={'Samurai todolist'}
                              image={spaceImg1}
                              link={'https://YACHNIKMIKHAIL.github.io/SamuraiTodolist'}/>
                    <Project1 title={'project 3'}
                              description={'Mountain todolist'}
                              image={spaceImg}
                              link={'https://YACHNIKMIKHAIL.github.io/mountainTodolist'}/>
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
`
const ContainerCase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100%;

`
const BlockCase = styled.div`
  max-height: content-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`