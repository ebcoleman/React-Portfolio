import React, {useState} from "react";

const Contact = () => {
    const [errors, setErrors] = useState({});
    
    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "This field is required",
            }));
        } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "Invalid email address",
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    };


    return (
        <div id='contact' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[#4C783F]">Contact</h1>
            <form 
                action="https://getform.io/f/pbnvnvkb" 
                method="POST" 
                encType='multipart/form-data'
            >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm">Name</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="name" 
                        onBlur={handleBlur}
                        />
                        {errors.name && <span className="text-red-500">{errors.name}</span>}
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm">Phone</label>
                        <input 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                        type="text" 
                        name="phone" 
                        />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm">Email</label>
                    <input 
                    className="border-2 rounded-lg p-3 flex border-gray-300" 
                    type="email" 
                    name="email" 
                    onBlur={handleBlur}
                    />
                    {errors.email && <span className="text-red-500">{errors.email} <br />{errors.name}
                    </span>}
                    
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm">Subject</label>
                    <input 
                    className="border-2 rounded-lg p-3 flex border-gray-300" 
                    type="text" 
                    name="subject" 
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm">Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10' name="message" onBlur={handleBlur}></textarea>
                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                </div>
                <button className="bg-[#4C783F] text-gray-100 mt-4 w-full p-4 rounded-lg">
                    Send Message
                </button>
            </form>

        </div>
    )
}

export default Contact