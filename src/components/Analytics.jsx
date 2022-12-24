import React from "react";
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="lap" />
                <div className="flex flex-col justify-center">
                    <p className="uppercase text-[#00df9a] font-bold">data Analytics dashboard</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4">Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At animi laudantium quo magnam quasi. Recusandae, corporis voluptatibus quibusdam qui ut, eos minus perspiciatis rem aperiam aliquid illo aut distinctio pariatur.</p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 py-3 text-[#00df9a] mx-auto md:mx-0">Get Started!</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics;