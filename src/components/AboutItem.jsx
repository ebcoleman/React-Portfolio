/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";


const AboutItem = ({title, details}) => {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 borderr-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-[#4C783F] rounded-md">{title}</span>
                </p>
                <p className="my-2 text-base font-normal text-[#222E0F]">{details}</p>
            </li>
        </ol>
    )
}

export default AboutItem