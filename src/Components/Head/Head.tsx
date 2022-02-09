import React from 'react';
import styled from "styled-components";

type HeadPropsType={
    title:string
    color:string
}
const Head = (props:HeadPropsType) => {
    return (
        <HeadCase>
            <h2 style={{color: props.color}}>{props.title}</h2>
        </HeadCase>
    );
};

export default Head;

const HeadCase = styled.div`
  //font-family: 'Festive', cursive;
  //font-family: 'Quintessential', cursive;
  //font-family: 'Syne Tactile', cursive;
  font-family: 'Indie Flower', cursive;
  //font-family: 'Shizuru', cursive;
  font-size: 160%;
`