import React from 'react';
import styled from "styled-components";
import img from './../Images/MRC1786.jpg'

const Main = () => {
    return (
        <MainCase id={'main'}>
            <ContainerCase>
                <NameCase>
                    <span>Hi, I'm  </span>
                    <h1>YACHNIK MIKHAIL </h1>
                    <p>Dreamer, father, fixedGear rider.</p>
                </NameCase>
                <PhotoCase>
                    <img src={img} alt="blabla"
                         style={{width:'100%',borderRadius :'10px'}}
                    />
                </PhotoCase>
            </ContainerCase>
        </MainCase>
    );
};

export default Main;

const MainCase = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
const ContainerCase = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  //font-family: 'Shizuru', cursive;
  
  //font-family: 'Quintessential', cursive;
  //font-family: 'Syne Tactile', cursive;
  font-family: 'Indie Flower';
`
const NameCase = styled.div`
  min-width: 43vh;
  min-height: 205px;
  background-color: rgba(34, 39, 94, 0.7);
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  color: #00d0fd;
  //color: sandybrown;
`
const PhotoCase = styled.div`
  max-width: 60vh;
  min-height: 205px;
  //background-color: rgba(34, 39, 94, 0.7);
  border-radius: 10px;
  // background: url(${img})no-repeat center/cover;
  //padding: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //margin: 0 2em;
  flex-wrap: nowrap;
`
