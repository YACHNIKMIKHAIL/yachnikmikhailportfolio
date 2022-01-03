import React from 'react';
import styled from "styled-components";
import Skill1 from "./Skill1/Skill1";

const Skills = () => {
    return (
        <SkillsCase>
            <ContainerCase>
                <h2>Skills</h2>
                <BlockCase>
                    <Skill1 title={'js'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
                    <Skill1 title={'redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
                    <Skill1 title={'react'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipiscialias architecto cupiditate dolorem, eligendi eum ex fugit illo impedit ipsamiste molestiae nisi pariatur qui repellendus sequi tempora, totam vitae!'}/>
                </BlockCase>
            </ContainerCase>
        </SkillsCase>
    );
};

export default Skills;

const SkillsCase = styled.div`
  height: 100vh;
  background-color: rgba(89, 61, 215, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerCase = styled.div`
  border: 3px black dashed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 80%;
 
`
const BlockCase = styled.div`
  border: 3px black dashed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: auto;
`