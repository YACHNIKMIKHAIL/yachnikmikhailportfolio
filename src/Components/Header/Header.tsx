import React from 'react';
import styled from "styled-components";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <HeaderCase>
            <Nav/>
        </HeaderCase>
    );
};

export default Header;

const HeaderCase=styled.div`
  height: 10vh;
  background-color: rgba(8, 168, 183, 0.72);
  display: flex;
  justify-content: space-around;
  align-items: center;
`
