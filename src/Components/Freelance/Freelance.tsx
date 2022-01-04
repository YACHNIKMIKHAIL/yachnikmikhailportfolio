import React from 'react';
import styled from "styled-components";
import img from './../Images/MRC1786.jpg'

const Freelance = () => {
    return (
        <FreelanceCase>
            <ContainerCase>
                <TextCase>
                    <span>I can freelance ) </span>
                </TextCase>
                <ButtonCase>
                    <button>Hire me</button>
                </ButtonCase>
            </ContainerCase>
        </FreelanceCase>
    );
};

export default Freelance;

const FreelanceCase = styled.div`
  height: 20vh;
  background-color: rgba(200, 215, 61, 0.5);
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
  border: 3px red solid;
`
const TextCase = styled.div`
  width: 67vh;
  height: 20%;
  background-color: rgba(34, 39, 94, 0.7);
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: sandybrown;
`
const ButtonCase = styled.div`
  width: 67vh;
  height: 40%;
  background-color: rgba(34, 39, 94, 0.7);
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2em;
`
