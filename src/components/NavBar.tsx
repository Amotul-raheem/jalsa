import React from "react";

export const NavBar = () => {
    return(
        <nav className="bg-[#111826] ">
            <div className="flex justify-center items-center">
                <div className="flex justify-between items-center py-6 text-white w-[85%] font-space">
                    <h2 className="text-xl font-bold">JALSA</h2>
                    {/*<div><img src=""/></div>*/}
                    <div className="flex justify-between items-center xs:hidden sm:hidden md:hidden">
                        <div className="flex justify-between mx-12">
                            <h3 className="mx-8 text-sm font-medium">Event Overview</h3>
                            <h3 className="mx-8 text-sm font-medium">Speakers</h3>
                            <h3 className="mx-8 text-sm font-medium">Schedule</h3>
                        </div>
                        <div className="mx-5 flex items-center">
                            <button className="bg-[#9F9EFF] py-2 px-4 rounded-3xl text-sm font-medium">Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

