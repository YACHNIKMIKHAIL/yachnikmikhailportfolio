import React from 'react';
import styled from "styled-components";

type Project1Type = {
    title: string
    description:string
}
const Project1 = (props: Project1Type) => {
    return (
        <PrjctCase>
            <ImageCase style={{borderRadius:'10px'}}>
            <button>Show</button>
            </ImageCase>
            <ProjectTitleCase>
                {props.title}
            </ProjectTitleCase>
            <DescriptionCase>
                {props.description}
            </DescriptionCase>
        </PrjctCase>
    );
};

export default Project1;

const PrjctCase = styled.div`
  width: 450px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;
  background-color: rgba(34, 39, 94, 0.8);
  border-radius: 10px;
`
const ImageCase = styled.div`
  width: 100%;
  height: 60%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProjectTitleCase = styled.div`
  width: 60%;
  height: 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: fuchsia;
  font-size: 40px;
`
const DescriptionCase = styled.div`
  min-width: 60%;
  height: 25%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  color: sandybrown;
`