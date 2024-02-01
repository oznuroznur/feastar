import React from "react";
import RedCircle from "../../assets/icons/RedCircle";

const Banner = () => {
    return (
        <div className="flex flex-row items-center border-2 border-t border-b-0 border-r-0 border-l-0 border-black">
        <div className="w-[75%] px-16 py-10">
            <h1 className="font-semibold text-6xl">DISCOVER CULINARY <br></br> EXCELLENCE 
                <span className="text-5xl font-extralight">   With Feastar</span>
            </h1>
        </div>
        <div className="pl-32 py-12 justify-start">
          {/*   <RedCircle /> */}
          <div className=" px-32 ">
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dOtAN4zgw4-gPrXp6Ww5tgP4lKep1vXWWg&usqp=CAU"
          >
          </img>
          </div>
         
        </div>
        </div>
    )
}

export default Banner