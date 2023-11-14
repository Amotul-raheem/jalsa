import React from "react";


export  const Sponsors  = () => {
    return(
        <div className="w-[100%] flex justify-center mt-8 mb-24">
            <div className="w-[70%] ">
                <h2 className="font-coustard font-base text-[#0E0E3F] text-3xl">Our Sponsors</h2>
                <div className="flex justify-between my-12">
                    <img src="/images/airbnb.png" alt="Airbnb logo"/>
                    <img src="/images/google.png" alt="Google logo"/>
                    <img src="/images/dominos.png" alt="Dominos logo"/>
                    <img src="/images/coke.png" alt="Cocacola logo"/>
                </div>
            </div>
        </div>
    )
}