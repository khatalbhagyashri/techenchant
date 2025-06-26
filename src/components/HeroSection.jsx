import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { companyLogos } from "../constant";

function HeroSection() {
  return (
    <section className="w-full">

      <div className="w-full h-screen flex items-center gap-2 md:px-28 px-6">
        <div className="md:w-1/2 bg-red-00">
          <span className="border text-sm md:text-base border-black rounded-md px-2 py-1 md:px-3 md:py-1.5">
            Digital Marketing
          </span>
          <h1 className="md:text-[63px] text-4xl font-bold mt-7 leading-[43px] md:leading-[70px]">
            Grow Your <span className=" text-orange-600 ">Business</span> with
            Smart Digital <span className="text-primaryColor">Strategies</span>.
          </h1>
          <h1 className="text-lg leading-6 font-light mt-5 text-slate-600">
            We help brands grow through cutting-edge SEO, Social Media
            Marketing, Graphics Design, Web Development, and Content Marketing
            strategies.
          </h1>

          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border relative flex items-center border-orange-600 
                       rounded-full px-4 py-2 mt-6 group overflow-hidden transition-all duration-300 w-[125px]"
          >
            {/* Enquiry Text (Hidden on Hover) */}
            <span className="group-hover:opacity-0 text-orange-600 transition-opacity duration-300">
              Explore
            </span>

            {/* Icon Container (Expands on Hover) */}
            <div
              className="absolute right-0 w-10 h-10 bg-orange-600 rounded-full p-1.5 flex items-center justify-center 
                         transition-all duration-300 group-hover:w-full group-hover:rounded-full"
            >
              <MdArrowForwardIos
                size={20}
                className="transition-transform duration-300 text-white group-hover:scale-125"
              />
            </div>
          </button>
        </div>

        <div className="w-1/2 h-full relative hidden md:flex justify-end items-center bg-green-00">
          <div className="w-[41%] mt-52 h-1/2  p-2 bg-contain rounded-full overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/checking-e-mails_1098-16723.jpg?uid=R203045360&ga=GA1.1.2100011829.1732618920&semt=ais_items_boosted&w=740"
              alt="digital"
              className="rounded-full w-full h-full"
            />
          </div>
          <div className="w-[49%] h-2/3  p-2 bg-contain rounded-full overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/young-woman-standing-holding-laptop-happy-young-girl-using-her-laptop-isolated-white-wall_231208-8634.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740"
              alt="digital"
              className="rounded-full w-full h-full"
            />
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

      <div className="md:px-28 py-1 bg-[#cde2f7]">
        <div className="w-full flex justify-center py-5 md:gap-12 gap-6">
          {companyLogos.map((logo) => (
            <span
              key={logo.id}
              className="md:text-6xl cursor-pointer text-6xl text-orange-600 hover:text-gray-600 transition-all"
            >
              {logo.icon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
