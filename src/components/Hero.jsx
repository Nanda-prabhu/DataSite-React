import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] uppercase font-bold p-2">Grow with data analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">Grow with data.</h1>
                <div className="flex justify-center items-center py-4">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible, financing for </p>
                    <div>
                        <Typed className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4" strings={['BTB','BTC', 'SASS']} typeSpeed={120} backSpeed={130} loop />
                    </div>
                </div>
                <p className="md:2xl text-xl font-bold text-gray-500">Lorem ipsum  maxime! Unde accusamus repellat quos reprehenderit nemo.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
            </div> 
        </div>
    )
}

export default Hero;


