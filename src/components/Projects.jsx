import React from "react";
import ProjectItem from "./ProjectItem";
import faceSpaceImg from "../assets/faceSpace.png"
import passwordImg from "../assets/password-generator.jpg"
import portfolioImg from "../assets/portfolio-emily-coleman.jpg"
import weatherImg from "../assets/traveler-weather.jpg"

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-29 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#4C783F]">Projects</h1>
            <p className="text-center py-8 text-[#222E0F]">
                Please see below for a few samples of my work. 
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <a href="https://ebcoleman.github.io/Portfolio-Emily-Coleman/" target="_blank" rel="noopener noreferrer">  
                    <ProjectItem img={portfolioImg} title='First Portfolio App' />
                </a>
                <a href="https://github.com/ebcoleman/faceSpace" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={faceSpaceImg} title='FaceSpace App' />
                </a>
                <a href="https://ebcoleman.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={passwordImg} title='Password Generator App' />
                </a>
                <a href="https://ebcoleman.github.io/traveler-weather/" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={weatherImg} title='Weather App' />
                </a>
            </div>
        </div>
    )
} 

export default Projects