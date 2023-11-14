import React from "react";
import "./Hero.css"
import {Sponsors} from "./Sponsors";

export const Hero = () => {
    return (
        <div className="relative">
            <img className="absolute top-0 left-0" src="/images/topLeft.png" alt="Design"/>
            <img className="absolute top-0 right-0" src="/images/topRight.png" alt="Design"/>
            <div className="flex flex-col justify-center items-center h-auto">
                <div className="mt-48 mb-8 py-16  flex flex-col justify-center items-center">
                    <div className="bg-[#111826] flex items-center justify-between py-4 px-5 rounded-full">
                        <div className="flex items-center mx-2">
                            <img src="/images/icons/location-marker.svg" alt="location icon"/>
                            <h2 className="text-white font-space font-bold text-base mx-2">Oakland Farm in Alton,
                                Hampshire </h2>
                        </div>
                        <div className="flex items-center mx-2">
                            <img src="/images/icons/calendar.svg" alt="calender icon"/>
                            <h2 className="text-white font-space font-bold text-base mx-2">22nd - 24th July 2023</h2>
                        </div>
                    </div>
                    <div className="w-[60%] flex flex-col justify-center items-center text-center my-8 ">
                        <h1 className="text-[#0E0E3F] text-5xl font-coustard font-black py-3">The 73rd Annual Convention of
                            The </h1>
                        <h1 className="text-[#0E0E3F] text-5xl font-coustard font-black py-3">Ahmadiyya Muslim
                            Community</h1>
                        <p className="text-[#515176] font-space font-medium text-sm w-[60%] py-3">Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit i
                        </p>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                        <button
                            className="bg-[#9F9EFF] px-14 py-5 rounded-full mx-4 text-white font-space text-sm font-medium ">Get
                            Ticket
                        </button>
                        <div
                            className="flex justify-between px-8 py-5 border-black border rounded-full font-space text-sm font-medium ">
                            <img src="/images/icons/play.svg" alt="location icon"/>
                            <button className="mx-3">Watch The Teaser</button>
                        </div>
                    </div>
                </div>

                <Sponsors/>

                <div className="custom-shape-divider-bottom-1697467622">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>

            </div>


        </div>
    )
}