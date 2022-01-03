import React from 'react';
import styled from "styled-components";

const Nav = () => {
    return (
        <NavCase>
            <a href="#" style={{color:'whitesmoke'}}>Main</a>
            <a href="#" style={{color:'whitesmoke'}}>Skills</a>
            <a href="#" style={{color:'whitesmoke'}}>Projects</a>
            <a href="#" style={{color:'whitesmoke'}}>Works</a>
            <a href="#" style={{color:'whitesmoke'}}>Contacts</a>
        </NavCase>
    );
};

export default Nav;

const NavCase=styled.div`
  //background-color: rgba(34, 39, 94, 0.5);
  width: 300px;
  display: flex;
  justify-content: space-between;
  color: white;
`
