import React from "react";
import {EventSummary} from "../commons/EventSummary";


export const EventScheduleBody = () => {
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
        <div className="py-20  flex justify-center items-center">
            <div className="w-[85%] my-8 flex flex-col justify-center items-center">

                <div className="flex flex-col w-full items-center">
                    <div className="flex w-full justify-between items-center ">
                        <div className="flex">
                            <img  src="/images/icons/calendar.svg" alt=""/>
                            <h2 className="font-space text-black font-bold text-lg px-2">22nd July 2023</h2>
                        </div>
                        <div className="flex">
                            <img  src="/images/icons/calendar.svg" alt=""/>
                            <h2 className="font-space text-black font-bold text-lg px-2">23nd July 2023</h2>
                        </div>
                        <div className="flex">
                            <img  src="/images/icons/calendar.svg" alt=""/>
                            <h2 className="font-space text-black font-bold text-lg px-2">24nd July 2023</h2>
                        </div>
                    </div>
                    <hr className="w-full my-4"/>
                </div>

                <div className="flex flex-wrap justify-between gap-1">
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