import React from 'react';
import styled from "styled-components";

type Project1Type = {
    title: string
    description: string
    link: string
    image: string
}
const Project1 = (props: Project1Type) => {
    return (
        <PrjctCase>
            <ImageCase style={{borderRadius: '10px'}}>
                <a href={props.link} target="_blank"><img src={props.image} alt="" style={{width: '100%', borderRadius: '10px'}}/></a>
            </ImageCase>
            <ProjectTitleCase>
                <h4>{props.title}</h4>
            </ProjectTitleCase>
            <DescriptionCase>
                {props.description}
            </DescriptionCase>
        </PrjctCase>
    );
};

export default Project1;

const PrjctCase = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  background-color: rgba(34, 39, 94, 0.8);
  border-radius: 10px;
  //border: 2px whitesmoke solid;
  padding: 0 0 2em 0 ;
`
const ImageCase = styled.div`
  width: 100%;
  //height: 200px;
  //background-color: black;
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
  font-size: 20px;
`
const DescriptionCase = styled.div`
  width: 80%;
  min-height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: sandybrown;
`