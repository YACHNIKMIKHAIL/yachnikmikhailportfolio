import React from 'react';
import styled from "styled-components";
import Skill1 from "./Skill1/Skill1";
import logo1 from './../Images/1024px-Unofficial_JavaScript_logo_2.svg.png'
import logo2 from './../Images/react-1.svg'
import logo3 from './../Images/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpeg'

const Skills = () => {
    return (
        <SkillsCase>
            <ContainerCase>
                <h2 style={{color: 'fuchsia', fontWeight: 'bold', fontSize: '30px'}}>Skills</h2>
                <BlockCase>
                    <Skill1 title={'JS'} image={logo1} description={'Pain && Tears. More pain && more tears...'}/>
                    <Skill1 title={'REACT'} image={logo2} description={'Endless Hapinness'}/>
                    <Skill1 title={'REDUX'} image={logo3} description={'great discoveries await us'}/>
                    <Skill1 title={'JS'} image={logo1}
                            description={'Pain && Tears. More pain && more tears. More pain && more tears. More pain && more tears...'}/>
                    <Skill1 title={'REACT'} image={logo2} description={'Endless Haphapihapihapihapihapinness'}/>
                    <Skill1 title={'REDUX'} image={logo3} description={'great discoveries awaaaaaaaait us'}/>
                </BlockCase>
            </ContainerCase>
        </SkillsCase>
    );
};

export default Skills;

const SkillsCase = styled.div`
  min-height: 100vh;
  background-color: rgba(34, 39, 94, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerCase = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;

`
const BlockCase = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`