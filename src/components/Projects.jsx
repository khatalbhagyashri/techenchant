import React, { useState } from "react";
import { projects } from "../constant";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa6";

const categories = ["All", "Web Development", "SEO", "Graphic Design"];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === selectedCategory);

  return (
    <div className="bg-slate-300 md:px-28 px-6 py-20">
      <div className="flex flex-col items-center">
        <span className="border border-black rounded-md text-sm px-2 py-1 md:text-base md:px-3 md:py-1.5">
          Our Projects
        </span>
        <h1 className="text-xl font-semibold mt-3">
          Some of Our Amazing Projects
        </h1>
      </div>

      <div className="md:w-11/12 mx-auto">
        {/* Category Buttons */}
        <div className="flex gap-4 flex-wrap justify-center my-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-sm px-4 py-2 md:text-base rounded-full border ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              } hover:bg-blue-100 transition-all duration-300`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="border border-black rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <img src={proj.img} alt="img" className="rounded-lg" />
              <h2 className="text-xl font-semibold mt-3">{proj.title}</h2>
              <p className="text-sm text-gray-500">{proj.category}</p>
              <button className="flex items-center gap-2 mt-4 mb-1 text-sm hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
