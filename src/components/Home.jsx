import React from "react";
import { MdArrowOutward, MdArrowForwardIos } from "react-icons/md";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./testimonials/Testimonials";
import { companyLogos } from "../constant";

function Home() {
  return (
    <>
      <div className="relative w-full h-screen bg-blue-400 flex gap-5 px-28">
        <div className="w-2/5 bg-red-00 mt-32">
          <span className="border border-black rounded-md px-3 py-1.5">
            Digital Marketing
          </span>
          <h1 className="text-5xl font-bold mt-7  leading-[60px]">
            Grow Your <span className="text-purple-700">Business</span> with
            Smart Digital <span className="text-orange-600 ">Strategies</span>.
          </h1>
          <h1 className="text-lg leading-6 font-normal mt-5 text-slate-600">
            We help brands grow through cutting-edge SEO, Social Media
            Marketing, Graphics Design, Web Development, and Content Marketing
            strategies.
          </h1>

          <button
            onClick={() => setOpenDialog(!openDialog)}
            className="border relative flex items-center border-black hover:border-slate-500 
               rounded-full px-4 py-2 mt-6 group overflow-hidden transition-all duration-300 w-[125px]"
          >
            {/* Enquiry Text (Hidden on Hover) */}
            <span className="group-hover:opacity-0 transition-opacity duration-300">
              Explore
            </span>

            {/* Icon Container (Expands on Hover) */}
            <div
              className="absolute right-0 w-9 h-9 bg-white rounded-full p-1.5 flex items-center justify-center 
                 transition-all duration-300 group-hover:w-full group-hover:rounded-full"
            >
              <MdArrowForwardIos
                size={20}
                className="transition-transform duration-300 group-hover:scale-125"
              />
            </div>
          </button>
        </div>

        <div className="w-3/5 flex justify-end bg-green-00">
          <div className=" w-[55%] h-3/4 border mt-20 border-slate-500 p-5 bg-contain rounded-full overflow-hidden">
            <img
              src="src/assets/DigitalGirl.avif"
              alt="digital"
              className="rounded-full w-full h-full"
            />
          </div>

          <div className="relative w-[30%] h-1/2 flex flex-col justify-center mt-40 items-center bg-red-00">
            <span className="absolute top-0 left-0 bg-white bg-opacity-65 tracking-wide font-light text-slate-700 rounded-md w-fit px-2 py-0.5 mt-1 hover:translate-x-0.5 hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-md">
              SEO
            </span>
            <span className="absolute top-20 right-20 bg-white bg-opacity-65 tracking-wide font-light text-slate-700 rounded-md w-fit px-2 py-0.5 mt-1">
              Social Media
            </span>
            <span className="absolute top-36 right-0 bg-white bg-opacity-65 tracking-wide font-light text-slate-700 rounded-md w-fit px-2 py-0.5 mt-1">
              Web Development
            </span>
            <span className="absolute bottom-36 right-0  bg-white bg-opacity-65 tracking-wide font-light text-slate-700 rounded-md w-fit px-2 py-0.5 mt-1">
              Google Ads
            </span>
            <span className="absolute bottom-20 right-12 bg-white bg-opacity-65 tracking-wide font-light text-slate-700 rounded-md w-fit px-2 py-0.5 mt-1">
              Graphics Design
            </span>
            <span className="absolute bottom-0 left-0 bg-white bg-opacity-65 tracking-wide font-light text-slate-700 rounded-md w-fit px-2 py-0.5 mt-1">
              UI/UX
            </span>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1744263711 absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>

      <div className="px-28 py-1 bg-[#ffebcd]">
        {/* <div className="flex flex-col items-center">
          <span className="border border-black rounded-md px-3 py-1.5">
            Our Clients
          </span>
          <h1 className="text-xl font-semibold mt-3">
            Some of Our Amazing Projects
          </h1>
        </div> */}
        <div className="flex justify-center py-5 gap-12">
          {companyLogos.map((logo) => (
            <span
              key={logo.id}
              className="text-7xl text-gray-500 hover:text-black transition-all"
            >
              {logo.icon}
            </span>
          ))}
        </div>
      </div>
      <About />
      <Services />
      <Projects />
      <Testimonials />
    </>
  );
}

export default Home;
