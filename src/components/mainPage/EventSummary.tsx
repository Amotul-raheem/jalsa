import React from "react";

interface eventProps  {
    name: String;
    time: String;
}

export const EventSummary = ({name,time}: eventProps) => {
    return(
        <div className="bg-[#F5F5F5] hover:bg-eventGrad active:bg-eventGrad flex flex-col py-8 px-5 h-auto w-[500px] mx-4 my-6 border border-solid border-black shadow-event">
            <div className="flex items-center ">
                <img src="/images/icons/clock.svg" alt="clock icon"/>
                <p className="font-coustard text-base text-[#111826] mx-3">{time}</p>
            </div>
            <div className="my-6">
                <p className="font-coustard text-base text-[#111826]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="flex items-center">
                <img src="/images/icons/Avatar.svg" alt="speaker avatar"/>
                <p className="font-coustard text-lg text-[#150F92] mx-3">{name}</p>
            </div>

        </div>
    )
}