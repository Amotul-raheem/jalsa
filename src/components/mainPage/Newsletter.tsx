import React from 'react';


export const Newsletter = () => {
    return (
        <div className="bg-black py-32 my-8 flex justify-center items-center relative">
            <img className="absolute bottom-20 left-32" src="/images/Rectangle-left.png" alt=""/>
            <img className="absolute top-20 right-32" src="/images/Rectangle-right.png" alt="" />

            <div className="w-[40%] flex flex-col justify-center items-center text-center ">
                <h1 className="text-white font-coustard font-black text-3xl py-2">Subscribe To Our Newsletter to Get</h1>
                <h1 className="text-white font-coustard font-black text-3xl py-2">Latest Update</h1>

                <p className="w-[85%] text-[#9CA2AF] font-space font-medium text-sm py-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>

                <div className="w-[70%] flex justify-center items-center py-6 ">
                    <input className="bg-black w-[400px] border border-[#ECF0F1] rounded-sm text-white font-space text-base font-medium py-2.5 px-3" placeholder="Enter Your Email"/>
                    <button className="bg-white px-4 py-2.5 mx-3 text-[#0040E3] rounded-sm text-base">Subscribe</button>
                </div>
            </div>

        </div>
    )
}