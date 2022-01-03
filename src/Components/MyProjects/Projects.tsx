import React from 'react';
import styled from "styled-components";
import Project1 from "./Project1/Project1";

const Projects = () => {
    return (
        <ProjectsCase>
            <ContainerCase>
                <h2 style={{color:'#00d0fd'}}>My Super Projects</h2>
                <BlockCase>
                    <Project1 title={'pr1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
                    <Project1 title={'pr2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>

                </BlockCase>
            </ContainerCase>
        </ProjectsCase>
    );
};

export default Projects;

const ProjectsCase = styled.div`
  height: 100vh;
  background-color: rgba(34, 39, 94, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerCase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 80%;
 
`
const BlockCase = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: auto;
`