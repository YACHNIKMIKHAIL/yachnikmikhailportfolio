import React from 'react';
import styled from "styled-components";
import img from './../Images/MRC1786.jpg'

const Main = () => {
    return (
        <MainCase>
            <ContainerCase>
                <NameCase>
                    <span>Hi, I'm  </span>
                    <h1>YACHNIK MIKHAIL </h1>
                    <p>Dreamer, father, fixedGear rider.</p>
                </NameCase>
                <PhotoCase>
                    <img src={img} alt="blabla" style={{minWidth:'20%',borderRadius :'10px'}}/>
                </PhotoCase>
            </ContainerCase>
        </MainCase>
    );
};

export default Main;

const MainCase = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`
const ContainerCase = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const NameCase = styled.div`
  width: 60vh;
  height: 40vh;
  background-color: rgba(34, 39, 94, 0.7);
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  color: sandybrown;
`
const PhotoCase = styled.div`
  width: 60vh;
  height: 40vh;
  background-color: rgba(34, 39, 94, 0.7);
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2em;
  flex-wrap: nowrap;
`
