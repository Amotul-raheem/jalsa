import React from "react";
import {EventSummary} from "../commons/EventSummary";
import {Speaker} from "./Speaker";


export const SpeakersPageBody = () => {

    const Speakers = [
        {
            title: "Business Owner",
            name: "Muhammad Bello",
            bgImageUrl: "/images/Speaker1.png"
        },
        {
            title: "Lawyer",
            name: "Hassan Bello",
            bgImageUrl: "/images/Speaker1.png"

        },
        {
            title: "Entrepreneur",
            name: "Aisha Naim",
            bgImageUrl: "/images/Speaker1.png"

        },
        {
            title: "Sheikh",
            name: "Lukman Ghulam",
            bgImageUrl: "/images/Speaker1.png"
        },
        {
            title: "Doctor",
            name: "Warris Hashim",
            bgImageUrl: "/images/Speaker1.png"
        },
        {
            title: "Sheikh",
            name: "Hameed Hamza",
            bgImageUrl: "/images/Speaker1.png"
        },
        {
            title: "Entrepreneur",
            name: "Aisha Naim",
            bgImageUrl: "/images/Speaker1.png"
        },
    ]

    return (
        <div className="py-20 flex justify-center items-center">
            <div className="w-[85%] my-8 flex flex-col justify-center items-center">
                <div className="flex flex-wrap justify-between gap-1">
                    {Speakers.map((speaker) => {
                        return(
                            <Speaker
                                name={speaker.name}
                                title={speaker.title}
                                bgImage={speaker.bgImageUrl}
                            />
                        )
                    })}

                </div>

            </div>

        </div>
    )
}