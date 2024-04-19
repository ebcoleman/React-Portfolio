import { IoLogoGithub } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#4C783F] text-white py-4 text-center">
            <p>Thanks for stopping by!</p>
            <div className="flex justify-center pt-2 w-full">
                        <a href="https://www.linkedin.com/in/emily-coleman-245893228/" target="_blank" rel="noopener noreferrer">   
                        <FaLinkedin className="cursor-pointer" size={30} />
                        </a>
                        <a href="https://github.com/ebcoleman" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub className="cursor-pointer" size={30}/>
                        </a>
                        <a href="https://www.facebook.com/emily.coleman.5496/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="cursor-pointer" size={30} />
                        </a>
                        <a href="https://www.instagram.com/ecoleman9311/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="cursor-pointer" size={30} />
                        </a>
                    </div>
        </footer>
    );
}

export default Footer;