import React from 'react';
import styled from "styled-components";

const Nav = () => {
    return (
        <NavCase>
            <a href="#">Main</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Works</a>
            <a href="#">Contacts</a>
        </NavCase>
    );
};

export default Nav;

const NavCase=styled.div`
  border: 1px solid #ff9103;
  background-color: rgba(8, 168, 183, 0.72);
  width: 300px;
  display: flex;
  justify-content: space-between;
`
