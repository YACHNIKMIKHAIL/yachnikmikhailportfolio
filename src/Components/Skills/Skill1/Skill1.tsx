import React from 'react';
import styled from "styled-components";

type Skill1Type = {
    title: string
    description:string
}
const Skill1 = (props: Skill1Type) => {
    return (
        <SklCase>
            <IconCase></IconCase>
            <h3>{props.title}</h3>
            <DescriptionCase>
                {props.description}
            </DescriptionCase>
        </SklCase>
    );
};

export default Skill1;

const SklCase = styled.div`
  width: 250px;
  min-height: 300px;
  background-color: sandybrown;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
`
const IconCase = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
`
const DescriptionCase = styled.div`
  width: 250px;
  background-color: sandybrown;
  text-align: center;
`