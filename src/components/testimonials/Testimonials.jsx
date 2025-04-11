import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../../constant";

function Testimonials() {
  return (
    <div className="bg-red-300 px-28 py-20">
      <div className="flex flex-col items-center">
        <span className="border border-black rounded-md px-3 py-1.5">
          Testimonials
        </span>
        <h1 className="text-xl font-semibold mt-3">What our Client Says</h1>
      </div>

      <div className="bg-red-00 flex justify-around mt-10">
        {testimonials.map((item) => (
          <div className="bg-yellow-400 w-96 h-64 rounded-xl p-8 flex flex-col justify-around">
            <FaQuoteLeft size={24} />
            <h1 className="text-sm font-light">{item.review}</h1>
            <div className="flex gap-3">
              <img
                src={item.img}
                alt="img"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-sm font-medium">{item.name}</h1>
                <span className="text-sm font-light">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
