import { MdArrowForwardIos } from "react-icons/md";
import { companyLogos } from "../constant";
import Header from "./Header";
import { Link } from "react-scroll";
import { MdArrowOutward } from "react-icons/md";

function HeroSection() {
  return (
    <>
      <section id="home" className="relative gradient">
        <div className="w-full h-[90vh] container flex">
          <div className="md:w-1/2 flex flex-col bg-red-00 py-16">
            <p className="border text-sm md:text-base border-black w-fit rounded-md px-2 py-1 md:px-3 md:py-1.5">
              Digital Marketing
            </p>
            <h1 className="md:text-[63px] text-4xl font-bold mt-7 leading-[43px] md:leading-[70px]">
              Grow Your <span className=" text-orange-600 ">Business</span> with
              Smart Digital{" "}
              <span className="text-primaryColor">Strategies</span>.
            </h1>
            <h1 className="text-lg leading-6 font-light mt-3 text-black">
              We help brands grow through cutting-edge SEO, Social Media
              Marketing, Graphics Design, Web Development, and <br />
              Content Marketing strategies.
            </h1>

            <button
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className=" border relative flex items-center mt-6 border-white 
                  rounded-full px-4 py-2  group overflow-hidden transition-all duration-300 w-[125px]"
            >
              {/* Enquiry Text (Hidden on Hover) */}
              <span className="group-hover:opacity-0 transition-all text-white duration-300">
                Explore
              </span>

              {/* Icon Container (Expands on Hover) */}
              <div
                className="absolute right-0 w-10 h-10 bg-white rounded-full p-1.5 flex items-center justify-center 
                    transition-all duration-300 group-hover:w-full group-hover:rounded-full"
              >
                <MdArrowOutward
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-125"
                />
              </div>
            </button>
          </div>

          <div className="w-1/2 bg-green-00 flex justify-end items- ">
            <div className="w-[41%] p-2 bg-contain bg-red-00 mt-48 rounded-full overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/checking-e-mails_1098-16723.jpg?uid=R203045360&ga=GA1.1.2100011829.1732618920&semt=ais_items_boosted&w=740"
                alt="digital"
                className="rounded-full w-full h-3/4"
              />
            </div>
            <div className="w-[49%] p-2 bg-contain rounded-full mt-7 overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/young-woman-standing-holding-laptop-happy-young-girl-using-her-laptop-isolated-white-wall_231208-8634.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740"
                alt="digital"
                className="rounded-full w-full h-3/4"
              />
            </div>
          </div>
        </div>

        {/* <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#e8f1fa"
            d="M0,192L48,170.7C96,149,192,107,288,90.7C384,75,480,85,576,96C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96V320H0Z"
          >
          </path>
        </svg> */}

        <div class="custom-shape-divider-bottom-1751032529">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <div className="w-full bg-[#DEF1FE] flex justify-center py-5 md:gap-12 gap-6">
        {companyLogos.map((logo) => (
          <span
            key={logo.id}
            className="md:text-6xl cursor-pointer text-6xl text-orange-600 hover:text-gray-600 transition-all"
          >
            {logo.icon}
          </span>
        ))}
      </div>
    </>
  );
}

export default HeroSection;
