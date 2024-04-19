import ProjectItem from "./ProjectItem";
import faceSpaceImg from "../assets/faceSpace.png"
import passwordImg from "../assets/password-generator.jpg"
import portfolioImg from "../assets/portfolio-emily-coleman.jpg"
import weatherImg from "../assets/traveler-weather.jpg"
import challengeImg from "../assets/challenge-01.png"
import logoImg from "../assets/basic-logo-maker.jpg"

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-29 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#4C783F]">Projects</h1>
            <p className="text-center py-8 text-[#222E0F]">
                Please see below for a few samples of my work. Click the image to see the live application or walk-through video.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <div>
                    <a href="https://ebcoleman.github.io/Portfolio-Emily-Coleman/" target="_blank" rel="noopener noreferrer">  
                    <ProjectItem img={portfolioImg} title='First Portfolio App' />
                    </a>
                    
                    <p className="text-center m-auto p-5 text-[#222E0F] font-semibold"><a href="https://github.com/ebcoleman/Portfolio-Emily-Coleman" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </p>
                </div>

                <div>
                    <a href="https://drive.google.com/file/d/1in-la5wquxNip-fzeHECTpnf7HBJKafj/view" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={faceSpaceImg} title='FaceSpace App' /></a>

                    <p className="text-center m-auto p-5 text-[#222E0F] font-semibold"> <a href="https://github.com/ebcoleman/faceSpace" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
                </div>

                <div>
                    <a href="https://ebcoleman.github.io/password-generator/" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={passwordImg} title='Password Generator App' /></a>

                    <p className="text-center m-auto p-5 text-[#222E0F] font-semibold"> <a href="https://github.com/ebcoleman/password-generator" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
                </div>

                <div>
                    <a href="https://ebcoleman.github.io/traveler-weather/" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={weatherImg} title='Weather App' /></a>

                    <p className="text-center m-auto p-5 text-[#222E0F] font-semibold"> <a href="https://github.com/ebcoleman/traveler-weather" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
                </div>

                <div>
                    <a href="https://ebcoleman.github.io/Challenge-01/" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={challengeImg} title='HTML/CSS App' /></a>

                    <p className="text-center m-auto p-5 text-[#222E0F] font-semibold"> <a href="https://github.com/ebcoleman/Challenge-01" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
                </div>

                <div>
                    <a href="https://drive.google.com/file/d/1Drjya71xg4XoS-iaF2IaqteFrKZC_PIn/view" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={logoImg} title='SVG Logo Maker' /></a>

                    <p className="text-center m-auto p-5 text-[#222E0F] font-semibold"> <a href="https://github.com/ebcoleman/basic-logo-maker" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
                </div>

            </div>
        </div>
    )
} 

export default Projects