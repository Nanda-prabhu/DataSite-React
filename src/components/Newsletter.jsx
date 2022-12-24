import React from "react";

const Newsletter = () => {
    return(
        <div className="bg-black text-white w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips and tricks to optimize your flow?</h1>
                    <p>Sign up to pur newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter your email"/>
                        <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Notify me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">privacy policy</span></p>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;



// <input className="rounded-md px-2 py-2 w-full my-4" type="text" placeholder="Enter your email"/>
// <button className="text-black w-[200px] rounded-md font-medium my-6 py-3 bg-[#00df9a] mx-auto">Notify me</button>
// <p>We care about the protection of your data. Read our <a className="text-[#00df9a] text" href="#">privacy policy</a></p>