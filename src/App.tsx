import React from 'react';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/MyProjects/Projects";
import styled from "styled-components";


function App() {
    return (
        <AppCase>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </AppCase>
    );
}

export default App;

const AppCase = styled.div`
  //background: url("https://c4.wallpaperflare.com/wallpaper/33/183/709/texture-textured-portrait-display-vertical-wallpaper-preview.jpg")no-repeat center/cover;
  background: url("https://c4.wallpaperflare.com/wallpaper/542/50/545/simple-background-blue-simple-minimalism-wallpaper-preview.jpg")no-repeat center/cover;
  overflow: auto;
  height: 100vh;
`