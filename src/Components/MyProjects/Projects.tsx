import React from 'react';
import styled from "styled-components";
import Project1 from "./Project1/Project1";

const Projects = () => {
    return (
        <ProjectsCase>
            <ContainerCase>
                <h2 style={{color:'#00d0fd'}}>My Super Projects</h2>
                <BlockCase>
                    <Project1 title={'project 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
                    <Project1 title={'project 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
                    <Project1 title={'project 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
                    <Project1 title={'project 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
                    <Project1 title={'project 1'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
                    <Project1 title={'project 2'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
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
  width: 80%;
  border: 2px yellow solid;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`