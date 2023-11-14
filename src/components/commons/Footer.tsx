import React from "react";


export const Footer = () => {
    return(
        <div className="py-24 flex justify-center items-center" >

            <div className="w-[85%] flex justify-between items-center">
                <div className="flex flex-col items-start ">
                    <h2 className="font-space text-[#111826] text-lg font-bold ">JALSA</h2>
                    <div className="flex my-3">
                        <img className="mr-3" src="/images/icons/b-facebook.svg" alt=""/>
                        <img className="mr-3" src="/images/icons/b-twitter.svg" alt=""/>
                        <img className="mr-3" src="/images/icons/b-whatsapp.svg" alt=""/>
                        <img className="mr-3" src="/images/icons/b-instagram.svg" alt=""/>

                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="mx-16">
                        <h2 className="font-coustard text-base text-[#9F9EFF] pb-4">About Us</h2>
                        <p className="font-space font-medium  text-sm text-[#111826] pb-2">Who we are</p>
                        <p className="font-space font-medium  text-sm text-[#111826] pb-2">Terms & Conditions</p>
                        <p className="font-space font-medium  text-sm text-[#111826] pb-2">Privacy Policy</p>
                    </div>
                    <div className="mx-16">
                        <h2 className="font-coustard  text-base text-[#9F9EFF] pb-4">Contact Us</h2>
                        <p className="font-space font-medium  text-sm text-[#111826] pb-2">+447012356893</p>
                        <p className="font-space font-medium  text-sm text-[#111826] pb-2">+447986432174</p>
                    </div>
                </div>

            </div>

        </div>
    )
}