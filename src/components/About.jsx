import React from "react";
import { aboutItems } from "../constant";

//bg-[#ffebcd]

function About() {
  return (
    <div className="bg-red-300 flex px-28 py-10 gap-10">
      <div className="w-1/2 py-10">
        <img
          className="rounded-3xl w-[550px] h-[340px]"
          src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740"
          alt="img"
        />
      </div>
      <div className="w-1/2 py-10">
        <span className="border border-black rounded-md px-3 py-1.5">
          About Us
        </span>
        <h1 className="text-2xl font-semibold mt-5">Who We Are</h1>
        <p className="text-base mb-2">
          At TechEnchant, we’re a team of digital marketing experts who turn
          ideas into revenue-generating strategies. With years of experience in
          SEO, PPC, content, and branding, we help businesses thrive in a
          competitive online world.
        </p>

        <div className="flex justify-around mt-5">
          {aboutItems.map((item) => (
            <div key={item.id} className="inverted-radius flex flex-col gap-1 justify-center text-center p-1">
              <h1 className="text-2xl font-semibold">{item.count}</h1>
              <h1 className="text-base font-light">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
