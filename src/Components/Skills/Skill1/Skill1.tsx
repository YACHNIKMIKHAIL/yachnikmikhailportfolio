import React from 'react';
import styled from "styled-components";

type Skill1Type = {
    title: string
    description:string
    image:string
}
const Skill1 = (props: Skill1Type) => {
    return (
        <SklCase>
            <IconCase><img src={props.image} alt="logo" style={{height:'60px',width:'60px'}}/></IconCase>
            <h3 style={{fontWeight:'bold'}}>{props.title}</h3>
            <DescriptionCase>
                {props.description}
            </DescriptionCase>
        </SklCase>
    );
};

export default Skill1;

const SklCase = styled.div`
  width: 250px;
  min-height: auto;
  background-color: rgba(34, 39, 94, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  color: whitesmoke;
  padding: 7px;
  box-sizing:border-box;
`
const IconCase = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
`
const DescriptionCase = styled.div`
  width: 80%;
  text-align: center;
  word-wrap: break-word;
`