import React from "react";

interface speakerProps  {
    name: String;
    title: String;
    bgImage: String;
}

export const Speaker = ({name,title, bgImage} : speakerProps) => {
    return(
        <div
            style={{ backgroundImage: `url(${bgImage})`}}
            className="grayscale bg-no-repeat bg-cover w-[450px] h-[450px] shadow-lg my-8 mx-8 flex items-end">

            <div className="bg-[#111826] w-full h-[110px] px-6 py-8">
                <h2 className="font-coustard text-white text-xl ">{name}</h2>
                <p className="font-coustard text-[#BDC6D3] text-sm py-2">{title}</p>

            </div>


        </div>
    )
}