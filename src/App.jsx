import React from 'react';
import './App.css';
import Header from './components/Header & Footer/Header.jsx';
import CareerGoalsSection from "./components/Career Goals Section/CareerGoalsSection.jsx";
import AboutMeSection from "./components/About Me Section/AboutMeSection.jsx";
import ProjectsSection from "./components/Projects Section/ProjectsSection.jsx";
import EducationSection from "./components/Education Section/EducationSection.jsx";
import WorkSection from "./components/Work Section/WorkSection.jsx";
import HobbiesSection from "./components/Hobbies Section/HobbiesSection.jsx";
import Footer from "./components/Header & Footer/Footer.jsx";

function App() {
    return (
        <>
            <Header/>
            <div id="page-content" style={{ paddingTop: '56px', transition: 'padding-top 0.3s ease' }}>
                <CareerGoalsSection/>
                <div className="container-xl">
                    <AboutMeSection/>
                    <ProjectsSection/>
                    <EducationSection/>
                    <WorkSection/>
                    <HobbiesSection/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default App;