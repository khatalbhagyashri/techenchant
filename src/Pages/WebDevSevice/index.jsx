import React, { useState } from "react";
import { headerNavLink, techStack, webDevService } from "../../constant";
import { useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import TextField from "@mui/material/TextField";
import { MdArrowOutward } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
// import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function WebDevService() {
  const [openDialog, setOpenDialog] = useState(false);
  const location = useLocation();

  const [age, setAge] = React.useState("");
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="text-textColor">
     <Header />

      <div className="w-full h-[37vh] gradientSubMenu flex items-center justify-center">
        <div className="w-2/3 mx-auto ">
          <h1 className="text-white text-5xl font-bold leading-[60px] text-center">
            Professional Web Development Services to Power Your{" "}
            <span className="font-extrabold text-orange-600">
              {" "}
              Digital Presence
            </span>
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col py-10">
        <div className="bg-red-00 container bg-red-00 py-8">
          <h1 className="text-center text-3xl font-semibold text-textColor">
            What We Offer in Web Development
          </h1>
          <div className="flex flex-wrap mt-10 gap-8">
            {webDevService.map((item) => {
              return (
                <div className="w-96 h-auto bg-[#DEF0FE] rounded-md p-3 flex flex-col">
                  <p className="text-3xl text-orange-600">{item.icon}</p>
                  <h1 className="font-medium text-lg">{item.title}</h1>
                  <p className="font-normal text-sm tracking-wide">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[85%] h-[30vh] mx-auto mt-5 ">
          <img
            className="w-full h-full rounded-2xl object-cover "
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2bG9wbWVudHxlbnwwfDB8MHx8fDI%3D"
            alt="img"
          />
        </div>

        <div className="container bg-red-00">
          <h1 className="text-center text-3xl font-semibold text-textColor mt-12">
            Tech Stack We Use
          </h1>
          <div className="flex flex-wrap justify-between mt-5 gap-4">
            {techStack.map((item) => (
              <div
                key={item.id}
                className="bg-[#DEF1FE] w-72 rounded-md shadow-sm p-4 break-words overflow-hidden"
              >
                <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                {item.subTitle && (
                  <ul className="list-disc list-inside text-base font-normal space-y-1">
                    {item.subTitle.map((sub, index) => (
                      <li key={index}>{sub}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container bg-red-00 flex gap-8 py-16">
        <div className="w-3/5 h-[55vh]">
          <img
            className="w-full h-full rounded-2xl object-cover "
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2bG9wbWVudHxlbnwwfDB8MHx8fDI%3D"
            alt="img"
          />
        </div>
        <div className="w-2/5 flex flex-col gap-5 justify-center">
          <h1 className="text-[26px] font-semibold">
            Why Choose Us for Web Development
          </h1>
          <ul className="text-[18px] leading-10">
            <li>✅ 100% Mobile-First & Responsive</li>
            <li>✅ Clean, Maintainable Code</li>
            <li>✅ SEO & Speed Optimized</li>
            <li>✅ Integration with CMS (like WordPress, Strapi)</li>
            <li>✅ Transparent Communication & Timely Delivery</li>
          </ul>
          <button
            onClick={() => setOpenDialog(!openDialog)}
            className=" border relative flex items-center mt-10 border-black hover:border-text-Color 
      rounded-full px-4 py-2  group overflow-hidden transition-all duration-300 w-[190px]"
          >
            {/* Enquiry Text (Hidden on Hover) */}
            <span className="group-hover:opacity-0 transition-all duration-300">
              schedule a Call
            </span>

            {/* Icon Container (Expands on Hover) */}
            <div
              className="absolute right-0 w-10 h-10 bg-textColor rounded-full p-1.5 flex items-center justify-center 
        transition-all duration-300 group-hover:w-full group-hover:rounded-full"
            >
              <MdArrowOutward
                size={20}
                className="transition-transform duration-300 group-hover:scale-125 text-white"
              />
            </div>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default WebDevService;
