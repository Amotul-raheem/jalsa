import React from "react";
import {EventSummary} from "../commons/EventSummary";


export const Schedule = () => {
    const Events = [
        {
            time: "10:00am-12:00pm",
            name: "Muhammad Bello"
        },
        {
            time: "11:00am-02:00pm",
            name: "Hassan Bello"
        },
        {
            time: "10:00am-12:00pm",
            name: "Aisha Naim"
        },
        {
            time: "02:00pm-04:00pm",
            name: "Lukman Ghulam"
        },
        {
            time: "04:00pm-06:00pm",
            name: "Warris Hashim"
        },
        {
            time: "8:30pm-9:30pm",
            name: "Hameed Hamza"
        },
    ]

    return (
        <div className="py-24 px-36 flex justify-center items-center">
            <div className="flex flex-col items-start w-full">
                <h2 className="font-coustard text-[#0E0E3F] text-3xl my-8 ">Event Schedule</h2>
                <div className="flex justify-between w-full items-center my-12">
                    <div className="bg-[#111826] flex justify-between items-center rounded-full px-6 py-4 font-space text-xl font-bold text-white">
                        <img src="/images/icons/calendar.svg" alt="calender icon"/>
                        <button className="mx-6">22nd July 2023</button>
                        <img src="/images/icons/cheveron-down.svg" alt="chevron down icon" />
                    </div>
                    <h3 className="text-[#9332EA] text-xl font-space font-medium">View all</h3>
                </div>

                <div className="flex flex-wrap justify-between">
                    {Events.map((event) => {
                        return(
                            <EventSummary
                                name={event.name}
                                time={event.time}
                            />
                        )
                    })}

                </div>

            </div>
        </div>
    )
}