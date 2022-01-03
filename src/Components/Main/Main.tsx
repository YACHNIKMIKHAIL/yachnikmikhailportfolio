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
                    <p>Dreamer </p>
                </NameCase>
                <PhotoCase>
                    <img src={img} alt="blabla" style={{maxHeight: '38vh'}}/>
                </PhotoCase>
            </ContainerCase>
        </MainCase>
    );
};

export default Main;

const MainCase = styled.div`
  height: 100vh;
  background-color: rgba(61, 203, 215, 0.95);
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
  width: 70vh;
  height: 40vh;
  background-color: rgba(22, 74, 79, 0.95);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  //margin: 0 2em;
`
const PhotoCase = styled.div`
  width: 70vh;
  height: 40vh;
  background-color: rgba(14, 165, 178, 0.68);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2em;
`
