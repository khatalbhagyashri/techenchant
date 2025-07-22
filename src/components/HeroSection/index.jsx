import { companyLogos } from "../../constant";
import { MdArrowOutward } from "react-icons/md";

function HeroSection() {
  return (
    <>
      <section id="home" className="gradient">
        <div className="w-full h-[90vh] container flex ">
          <div className="md:w-[60%] flex flex-col justify-center bg-red-00 py-16">
            <p className="border text-sm md:text-base border-black w-fit rounded-md px-2 py-1 md:px-3 md:py-1.5">
              Digital Marketing
            </p>
            <h1 className="md:text-[63px] text-4xl font-bold mt-7 text-textColor leading-[43px] md:leading-[70px]">
              Grow Your <span className=" text-orange-600 ">Business</span> with
              Smart Digital <span className="text-orange-600">Strategies</span>.
            </h1>
            <h1 className="text-lg leading-[24px] font-light mt-3 text-textColor">
              We help brands grow through cutting-edge SEO, <br />Social Media
              Marketing, Graphics Design, Web Development, <br />and 
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

          <div className="w-[40%] bg-green-00 flex justify-center items-center  ">
            <div className="w-[75%] p-2 bg-contain rounded-full mt-7 overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/young-woman-standing-holding-laptop-happy-young-girl-using-her-laptop-isolated-white-wall_231208-8634.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740"
                alt="digital"
                className="rounded-full w-full h-3/4"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col font-semibold text-2xl text-textColor items-center justify-center py-8 gap-7">
        <h1>
          8+ companies <span className="text-orange-600">believe</span> in our
          vision
        </h1>
        <div className="flex gap-10">
          {companyLogos.map((logo) => (
            <span
              key={logo.id}
              className="md:text-[55px] cursor-pointer text-6xl text-orange-600 hover:text-textColor transition-all"
            >
              {logo.icon}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
