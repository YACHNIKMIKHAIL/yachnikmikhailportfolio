import React from 'react';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/MyProjects/Projects";
import styled from "styled-components";
import Freelance from "./Components/Freelance/Freelance";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import {Routes} from 'react-router-dom';
import {Route} from "react-router-dom";


function App() {
    return (

            <AppCase>
            <Header/>

                {/*<Routes>*/}
                {/*<Route path={'/main'} element={<Main/>}/>*/}
                {/*<Route path={'/skills'} element={<Skills/>}/>*/}
                {/*<Route path={'/projects'} element={<Projects/>}/>*/}
                {/*<Route path={'/freelance'} element={<Freelance/>}/>*/}
                {/*<Route path={'/contacts'} element={<Contacts/>}/>*/}
                <Main/>
                <Skills/>
                <Projects/>
                <Freelance/>
                <Contacts/>

                {/*</Routes>*/}

            <Footer/>
        </AppCase>

    );
}

export default App;

const AppCase = styled.div`
  background: url("https://c4.wallpaperflare.com/wallpaper/542/50/545/simple-background-blue-simple-minimalism-wallpaper-preview.jpg") no-repeat center/cover;
  overflow: auto;
  height: 100vh;
`