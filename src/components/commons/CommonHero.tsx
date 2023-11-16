import React from "react";


interface heroProps  {
    Heading: String;
    BodyText: String;
}

export const CommonHero = ({Heading, BodyText}: heroProps) => {
    return(
        <div className="relative ">
            <img className="absolute top-0 left-0" src="/images/topLeft.png" alt="Design"/>
            <img className="absolute top-0 right-0" src="/images/topRight.png" alt="Design"/>
            <div className="flex flex-col justify-center items-center h-auto">
                <div className="mt-56 py-16 flex flex-col justify-center items-center">
                    <div className="w-[80%] flex flex-col justify-center items-center text-center">
                        <h1 className="text-[#0E0E3F] text-5xl font-coustard font-black py-4">{Heading}</h1>
                        <p className="text-[#515176] font-space font-medium text-sm w-[60%] py-5">{BodyText}</p>
                    </div>

                </div>

            </div>

        </div>
    )
}