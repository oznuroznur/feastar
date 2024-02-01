import CoreIcon from "@/assets/icons/CoreIcon";
import React from "react";
import { CoreComp } from "../../components/CoreComp";
const CoreBg = () => {
  const coreData = [
    {
      icon: <CoreIcon />,
      title: "Excellence",
      info: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <CoreIcon />,
      title: "Excellence",
      info: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <CoreIcon />,
      title: "Excellence",
      info: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <CoreIcon />,
      title: "Excellence",
      info: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <>
      <div className="w-full ">
        <div className="relative z-10">
          <img
            className="px-16 pb-8"
            src="https://www.nurseleroglu.com/images/blog/diyet-yemekleri-tarifleri-1.jpg"
          ></img>
          <button className="bg-red-500 text-white w-44 h-12 absolute right-16 bottom-8">
            Explore Our Offerings
          </button>
          <div className="absolute w-full min-h-screen bg-lime-800 top-3/4 -z-10 ">
            <div className="flex justify-center pt-64 pb-20">
                <h1 className="text-yellow-200 text-5xl font-semibold">OUR CORE VALUES</h1>
            </div>
            <div className="flex flex-row justify-between mx-28 border-2 border-b-0 border-t-0">
              {coreData.map((item, index) => {
                return (
                  <div key={index} className="">
                    <CoreComp
                      title={item.title}
                      info={item.info}
                      icon={item.icon}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoreBg;
