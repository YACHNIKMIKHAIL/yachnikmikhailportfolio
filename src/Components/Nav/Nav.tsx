import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";

const Nav = () => {
    return (
        <NavCase>
            <a href="#main" style={{color: 'whitesmoke',textDecoration:'none'}}>Main</a>
            <a href="#skills" style={{color: 'whitesmoke',textDecoration:'none'}}>Skills</a>
            <a href="#projects" style={{color: 'whitesmoke',textDecoration:'none'}}>Projects</a>
            <a href="#works" style={{color: 'whitesmoke',textDecoration:'none'}}>Works</a>
            <a href="#contacts" style={{color: 'whitesmoke',textDecoration:'none'}}>Contacts</a>
            {/*className={({isActive}) => ((isActive ? s.active : ''))}*/}
        </NavCase>
    );
};

export default Nav;

const NavCase = styled.div`
  //background-color: rgba(34, 39, 94, 0.5);
  width: 300px;
  display: flex;
  justify-content: space-between;
  color: white;
  font-family: 'Indie Flower';
`
