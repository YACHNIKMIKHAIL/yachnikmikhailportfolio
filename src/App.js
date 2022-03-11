import React from "react";
import './App.css';
import Header from "./a0_header/Header";
import Main from "./a1_main/Main";
import Vacancy from "./a5_vacansy/Vacancy";
import Footer from "./a7_footer/Footer";
import RunningLine from "./a2_runningLine/RunningLine";
import Projects from "./a4_projects/Projects";
import Skills from "./a3_skills/Skills";
import Contacts from "./a6_contacts/Contacts";



function App() {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <RunningLine/>
            <Skills/>
            <Projects/>
            <Vacancy/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
