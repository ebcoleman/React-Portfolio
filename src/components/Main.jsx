/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="/images/waterfall.jpg" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-[#222E0F]">Emily Coleman</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-[#222E0F]">
                        I'm a
                        <TypeAnimation
                        sequence={[
                            'Developer',
                            2000, // wait 2s before replacing with the following"
                            'Coder',
                            2000,
                            'Student',
                            2000,
                        ]}
                        wrapper="div"
                        speed={50}
                        cursor={true}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        repeat={Infinity}
                        />
                        
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <a href="https://www.linkedin.com/in/emily-coleman-245893228/" target="_blank" rel="noopener noreferrer">   
                        <FaLinkedin className="cursor-pointer" size={20} />
                        </a>
                        <a href="https://github.com/ebcoleman" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub className="cursor-pointer" size={20}/>
                        </a>
                        <a href="https://www.facebook.com/emily.coleman.5496/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="cursor-pointer" size={20} />
                        </a>
                        <a href="https://www.instagram.com/ecoleman9311/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="cursor-pointer" size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main