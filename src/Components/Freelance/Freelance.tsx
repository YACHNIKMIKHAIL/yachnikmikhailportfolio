import React from 'react';
import styled from "styled-components";
import img from './../Images/MRC1786.jpg'

const Freelance = () => {
    return (
        <FreelanceCase id={'works'}>
            <ContainerCase>
                <TextCase>
                    <span style={{textAlign: 'center'}}>I am available for Freelance )</span>
                </TextCase>
                <ButtonCase>
                    <button style={{
                        backgroundColor: 'hotpink',
                        border: 'none',
                        color: 'white',
                        height: '40px',
                        borderRadius: '10px',
                        fontFamily: 'Indie Flower',
                        fontWeight:'bold'
                    }}>Hire me
                    </button>
                </ButtonCase>
            </ContainerCase>
        </FreelanceCase>
    );
};

export default Freelance;

const FreelanceCase = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  padding: 3.5em 0 0 0;
`
const ContainerCase = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const TextCase = styled.div`
  width: 67vh;
  height: 20%;
  //background-color: rgba(255, 105, 180, 0.3);
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: sandybrown;
  //color: rgba(34, 39, 94, 0.91);
  font-weight: bold;
  font-size: 30px;
`
const ButtonCase = styled.div`
  width: 67vh;
  height: 40%;
  border-radius: 10px;
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2em;
`
