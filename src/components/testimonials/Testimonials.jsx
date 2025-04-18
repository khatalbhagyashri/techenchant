import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../../constant";

function Testimonials() {
  return (
    <div className="bg-red-300 md:px-28 px-6 py-20">
      <div className="flex flex-col items-center">
        <span className="border border-black rounded-md text-sm px-2 py-1 md:text-base md:px-3 md:py-1.5">
          Testimonials
        </span>
        <h1 className="text-xl font-semibold mt-3">What our Client Says</h1>
      </div>

      <div className="bg-red-00 flex flex-col md:flex-row md:justify-around gap-4 mt-10">
        {testimonials.map((item) => (
          <div className="bg-yellow-400 md:w-96 md:h-64 rounded-xl p-8 flex flex-col justify-around">
            <FaQuoteLeft size={24} />
            <h1 className="text-sm font-light mt-3">{item.review}</h1>
            <div className="flex gap-3 mt-5">
              <img
                src="https://img.freepik.com/free-photo/young-woman-standing-holding-laptop-happy-young-girl-using-her-laptop-isolated-white-wall_231208-8634.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740"
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
