import React from "react";


export const About = () => {
    return (
        <div className="bg-[#F8F8F8] py-20 flex justify-center items-center relative ">
            <div className="w-[50%] mb-24 flex justify-center items-center flex-col text-center">
                <img className="absolute left-0 " src="/images/swirl-left.png" alt="swirl"/>
                <img className="absolute right-0 w-" src="/images/swirl-right.png" alt='swirl'/>
                <div className="my-8">
                    <h1 className="text=[#0E0E3F] font-coustard font-black text-3xl">What we are all about and what makes us </h1>
                    <h1 className="text=[#0E0E3F] font-coustard font-black text-3xl">different from the rest</h1>

                </div>
                <div className="my-8">
                    <p className="text-[#515176] font-space font-medium text-sm px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit i</p>
                </div>

                <div className="my-8 flex justify-center  z-10">
                    <img className="w-[900px]" src="/images/event.png" alt='Country flags'/>
                </div>

            </div>

        </div>
    )
}