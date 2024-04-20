import { GrDocumentDownload } from "react-icons/gr";

import ResumeItem from './ResumeItem'

const data  = [
    {
        title: 'Programming Languages',
        details: 'HTML, CSS, JavaScript'
    },
    {
        "title": "Version Control Systems",
        "details": "Git"
    },
    {
        title: 'Frontend Technologies and Tools',
        details: 'React.js, Handlebars.js, Bootstrap, Tailwind CSS, Progressive Web Apps(PWAs), Integration of APIs for enhanced functionality, Responsive design, npm'
    },
    {
        title: 'Backend Technologies and Tools',
        details: 'Node.js, Express.js, RESTful APIs, MongoDB, MySQL, Mongoose, Sequelize, Model-View-Controller(MVC) architecture'
    },
    {
        title: 'Testing and Debugging',
        details: 'Jest, Chrome DevTools'
    },
    {
        title: 'Other Skills',
        details: 'Git, Object-oriented programming(OOP), Problem-solving abilities, Collaboration, Teamwork, Communication'
    },
]
const Resume = () => {
    return (
        <div id='resume' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#4C783F] flex items-center justify-center">
                Resume 
                <a href="https://docs.google.com/presentation/d/1nwO0TfkYU6zNM5nrH-qSfT8r_5e7RWsr0dQq5aEO-CQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <       GrDocumentDownload className="ml-2 cursor-pointer" />
                </a>
            </h1>
            <h2 className="text-2xl font-bold text-[#4C783F] flex justify-left pt-6 pb-8">Developer Proficiencies</h2>
            {data.map((item, idx)=>(
                <ResumeItem 
                key={idx} 
                title={item.title} 
                details={item.details} 
                />
            ))}

        </div>
    )
}

export default Resume