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
            <p className="text-center py-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit neque debitis obcaecati mollitia illum earum porro, id dolorum ratione dolores aperiam laudantium velit temporibus? Nulla praesentium a suscipit molestias cupiditate.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={portfolioImg} title='First Portfolio App' />  
                <ProjectItem img={faceSpaceImg} title='FaceSpace App' />
                <ProjectItem img={passwordImg} title='Password Generator App' />
                <ProjectItem img={weatherImg} title='Weather App' />
            </div>
        </div>
    )
} 

export default Projects