import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";

const Nav = () => {
    return (
        <NavCase>
            {/*<NavLink to={'/main'}*/}
            {/*         style={({isActive}) => ((isActive ? {color: 'whitesmoke'} : {color: 'rgba(255,145,3,0.51)'}))}*/}
            {/*>Main</NavLink>*/}
            {/*<NavLink to={'/skills'}*/}
            {/*         style={({isActive}) => ((isActive ? {color: 'whitesmoke'} : {color: 'rgb(255,145,3,0.51)'}))}*/}
            {/*>Skills</NavLink>*/}
            {/*<NavLink to={'/projects'}*/}
            {/*         style={({isActive}) => ((isActive ? {color: 'whitesmoke'} : {color: 'rgb(255,145,3,0.51)'}))}*/}
            {/*>Projects</NavLink>*/}
            {/*<NavLink to={'/freelance'}*/}
            {/*         style={({isActive}) => ((isActive ? {color: 'whitesmoke'} : {color: 'rgb(255,145,3,0.51)'}))}*/}
            {/*>Works</NavLink>*/}
            {/*<NavLink to={'/contacts'}*/}
            {/*         style={({isActive}) => ((isActive ? {color: 'whitesmoke'} : {color: 'rgb(255,145,3,0.51)'}))}*/}
            {/*>Contacts</NavLink>*/}
            <a href="#main" style={{color: 'whitesmoke'}}>Main</a>
            <a href="#skills" style={{color: 'whitesmoke'}}>Skills</a>
            <a href="#projects" style={{color: 'whitesmoke'}}>Projects</a>
            <a href="#works" style={{color: 'whitesmoke'}}>Works</a>
            <a href="#contacts" style={{color: 'whitesmoke'}}>Contacts</a>
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
`
