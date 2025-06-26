import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { services } from "../constant";

function Services() {
  return (
    <section className="w-full h-[100vh] bg-[#cde2f7] md:px-28 px-6 py-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="border border-black rounded-md text-sm px-2 py-1 md:text-base md:px-3 md:py-1.5">
          Our Services
        </span>
        <h1 className="text-[25px] text-orange-600 text-center font-semibold mt-5">
          Our Services to Elevate Your Business
        </h1>
      </div>

      <div className="md:w-3/4 mx-auto flex flex-wrap bg-red-00 mt-8 justify-around">
        {services.map((item) => (
          <div
            key={item.id}
            className="w-72 h-80 flex flex-col justify-between p-4 mt-4 bg-[#98c9fa] hover:bg-[#e8f1fa] transition-all duration-300 rounded-2xl"
          >
            <h1 className="text-6xl flex justify-between items-center mt-5">
              {item.icon}
              <span className="text-5xl font-semibold opacity-20">
                {item.id}
              </span>
            </h1>
            <h1 className="text-2xl mt-3 font-semibold">{item.title}</h1>
            <p className="font-light text-base leading-5 mt-2">
              {item.content}
            </p>
            <button className="flex items-center gap-2 mt-6 mb-3 text-sm hover:underline">
              Learn More <IoArrowForwardOutline />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
