import React from "react";
import FooterLink from "./FooterLink";

export default function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      info1: "Home",
      info2: "About",
      info3: "Menu",
      info4: "Blog",
    },
    {
      title: "Menu Links",
      info1: "Home",
      info2: "About",
      info3: "Menu",
      info4: "Blog",
    },
    {
      title: "Feastar",
      info1: "Home",
      info2: "About",
      info3: "Menu",
      info4: "Blog",
    },
  ];
  return (
    <div className="h-64 w-full  bg-zinc-900 relative -bottom-72 ">
      <div className="flex flex-col w-64 h-full justify-center">
        <h1 className="text-4xl font-bold text-white flex justify-center pt-12">
          FE<span className="text-yellow-200">A</span>STAR
        </h1>
        <h5 className="text-white font-light text-sm text-center pt-12">
          Connect with us via Social Media
        </h5>
        <div className="flex flex-row space-x-6 p-8">
          <button className="bg-yellow-200 rounded-full w-6 h-6">i</button>
          <button className="bg-yellow-200 rounded-full w-6 h-6">f</button>
          <button className="bg-yellow-200 rounded-full w-6 h-6">t</button>
          <button className="bg-yellow-200 rounded-full w-6 h-6">y</button>
        </div>
      </div>
      <div className="flex flex-row w-96 h-full absolute top-0 left-96 justify-between pt-12 ">
        {footerLinks.map((item, index) => {
          return (
            <div key={index}>
              <FooterLink
                title={item.title}
                info1={item.info1}
                info2={item.info2}
                info3={item.info3}
                info4={item.info4}
                key={index}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-96 h-full absolute top-0 right-0 items-center justify-center">
        <h1 className="text-wrap text-yellow-200 font-normal text-sm py-4">
          Lorem ipsum dolor sit amet consectetur adipisicitiis voluptatibus eum
          consequatur aliquid.
        </h1>
        <label className="w-80 border-2 h-12 mr-16 border-zinc-500 mt-2">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Mail"
            className="bg-zinc-900 p-2 px-8"
          />
        </label>
        <button className="w-80 border-2 border-zinc-500 mt-4 bg-yellow-200 mr-16 h-12 text-lg font-semibold">
          Submit
        </button>
      </div>
    </div>
  );
}
