import { IoArrowForwardOutline } from "react-icons/io5";
import { services } from "../constant";
import { useNavigate } from "react-router-dom";


function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="w-full h-[90vh] bg-textColor md:px-28 px-6 flex flex-col items-center justify-center rounded-[70px]">
      <div className="flex flex-col items-center">
        <span className="border border-white text-white rounded-md text-sm px-2 py-1 md:text-base md:px-3 md:py-1.5">
          Our Services
        </span>
        <h1 className="text-[25px] text-white text-center font-semibold mt-5">
          Our Services to Elevate Your Business
        </h1>
      </div>

      <div className="md:w-3/4 mx-auto flex flex-wrap bg-red-00 mt-8 justify-around">
        {services.map((item) => (
          <div
            key={item.id}
            className="w-72 h-80 flex flex-col justify-between p-4 mt-4 bg-[#cde2f7] hover:bg-[#e8f1fa] transition-all duration-300 rounded-2xl"
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
            <button onClick={() => navigate("/services/seo")} className="flex items-center gap-2 mt-6 mb-3 text-sm hover:underline">
              Learn More <IoArrowForwardOutline />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
