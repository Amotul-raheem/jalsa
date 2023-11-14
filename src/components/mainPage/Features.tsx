import React from "react";


export const Features = () => {
    const Statistics = [
        {
            stat: "35K+",
            subscript: "People"
        },
        {
            stat: "7k+",
            subscript: "Volunteers"
        },
        {
            stat: "300K+",
            subscript: "Nan-bread"
        },
        {
            stat: "200+",
            subscript: "Acres"
        },
        {
            stat: "100+",
            subscript: "Countries"
        },
    ]
    return (
        <div className="bg-[#111826] py-12 flex justify-center items-center relative">
            <img className="absolute -top-[11%] left-0" src="/images/Ellipse-left.png" alt=""/>
            <img className="absolute -bottom-[10%] right-0" src="/images/Ellipse-right.png" alt=""/>
            <div className="w-[50%] my-8 text-center">
                <h2 className="font-coustard text-white font-black text-4xl mt-6">Features of the Event</h2>
                <div className="flex flex-wrap my-8 justify-center">
                    {Statistics.map((statistic) => {
                        return (
                            <div className="flex flex-col justify-center items-center mx-12 my-12">
                                <h1 className="font-coustard text-[#9F9EFF] font-normal text-6xl">{statistic.stat}</h1>
                                <p className="font-coustard text-[#BDC6D3] font-normal text-sm py-4">{statistic.subscript}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}