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

function WebDevService() {
  const [openDialog, setOpenDialog] = useState(false);
  const location = useLocation();

  const [age, setAge] = React.useState("");
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="text-textColor">
      <div className="w-full py-6 sticky bg-[#DEF1FE] top-0 z-10 flex justify-between items-center px-28">
        {/* Logo */}
        <div className="w-[25%] flex items-center">
          <ScrollLink to="/" className="">
            {/* <img src={logo} alt="logo" className="w-11" /> */}
            <h1 className="md:text-2xl cursor-pointer text-xl uppercase font-bold text-[#0d3c6b] ">
              TechEnchant
            </h1>
          </ScrollLink>
        </div>

        {/* Navigation Links */}
        <div className="w-[50%] bg-red-00 flex items-center justify-center bg-red-00 uppercase gap-4  ">
          {headerNavLink.map((item) => (
            <div key={item.id} className="relative group list-none  ">
              {/* Main Nav Item */}
              <ul>
                <li className="cursor-pointer p-1 group">
                  {!item.subMenu ? (
                    <ScrollLink
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-base flex items-center gap-2 transition-all duration-300 active:text-primaryColor"
                    >
                      {item.title}
                      <span className="transition-transform">{item.icon}</span>
                    </ScrollLink>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-base">{item.title}</span>
                      <span className="group-hover:rotate-180 transition-transform duration-300">
                        {item.icon}
                      </span>
                    </div>
                  )}
                </li>
              </ul>

              {/* Dropdown Menu */}
              {item.subMenu && (
                <div className="absolute left-0 mt-2 z-10 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <ul className="py-2">
                    {item.subMenu.map((subItem, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-sm text-slate-600 capitalize hover:bg-gray-100 cursor-pointer"
                      >
                        <RouterLink to={subItem.link}>
                          {subItem.title}
                        </RouterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <label className="flex flex-col gap-[6px] w-6 cursor-pointer relative">
            <input
              className="peer hidden"
              type="checkbox"
              checked={openMenu}
              onChange={() => setOpenMenu(!openMenu)}
            />
            <div className="rounded-full h-[2px] w-[50%] bg-black duration-500 peer-checked:rotate-[227deg] origin-right peer-checked:-translate-x-[8px] peer-checked:-translate-y-[1px]"></div>
            <div className="rounded-full h-[2px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
            <div className="rounded-full h-[2px] w-[50%] bg-black duration-500 place-self-end peer-checked:rotate-[229deg] origin-left peer-checked:translate-x-[8px] peer-checked:translate-y-[1px]"></div>
          </label>
        </div>

        {/* Slide Menu */}
        {openMenu && (
          <div className="w-full h-screen z-40 bg-pink-300 fixed top-0 left-0 animate-slide-left">
            <div className="flex flex-col items-center mt-28">
              {headerNavLink.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="px-4 py-3 border-b border-amber-300 text-black font-medium"
                  onClick={() => setOpenMenu(false)}
                >
                  {item.title}
                </Link>
              ))}
              <button
                onClick={() => setOpenDialog(!openDialog)}
                className=" border relative flex items-center mt-10 border-black hover:border-slate-500 
      rounded-full px-4 py-2  group overflow-hidden transition-all duration-300 w-[125px]"
              >
                {/* Enquiry Text (Hidden on Hover) */}
                <span className="group-hover:opacity-0 transition-all duration-300">
                  contact
                </span>

                {/* Icon Container (Expands on Hover) */}
                <div
                  className="absolute right-0 w-9 h-9 bg-white rounded-full p-1.5 flex items-center justify-center 
        transition-all duration-300 group-hover:w-full group-hover:rounded-full"
                >
                  <MdArrowOutward
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
              </button>

              {openDialog && (
                <div className="fixed inset-0 z-10 flex items-center justify-center p-4 bg-black bg-opacity-30">
                  <div className="w-full mt-12 bg-blue-300 overflow-hidden rounded-md shadow-lg flex-col max-w-4xl">
                    <div className="md:w-full relative ">
                      <RxCross2
                        size={26}
                        className="absolute right-2 top-3 cursor-pointer text-slate-400 hover:text-black"
                        onClick={() => setOpenDialog(false)}
                      />
                      <img
                        className="h-36 w-full"
                        src="https://img.freepik.com/free-vector/contact-concept-landing-page_52683-20526.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740"
                        alt="contact"
                      />
                    </div>
                    <div className="md:w-full p-4 mt-2">
                      <div className="flex flex-col gap-4 mb-3">
                        <TextField
                          size="small"
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                        />
                        <TextField
                          size="small"
                          fullWidth
                          label="Email"
                          variant="outlined"
                        />

                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-label">
                            Select Service
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Select Service"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>SEO</MenuItem>
                            <MenuItem value={20}>Web Development</MenuItem>
                            <MenuItem value={30}>Graphics Design</MenuItem>
                          </Select>
                        </FormControl>

                        <TextField
                          size="small"
                          label="Enquiry"
                          multiline
                          rows={3}
                          fullWidth
                          variant="outlined"
                        />
                        <button
                          type="submit"
                          className="bg-blue-500 mt-1 rounded-md py-2 text-white  hover:opacity-80"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Enquiry Button with Dialog */}
        <div className="w-[25%]  flex justify-end bg-red-00">
          <button
            onClick={() => setOpenDialog(!openDialog)}
            className=" border relative flex items-center border-textColor 
      rounded-full px-4 py-2  group overflow-hidden transition-all duration-300 w-[125px]"
          >
            {/* Enquiry Text (Hidden on Hover) */}
            <span className="group-hover:opacity-0 transition-opacity text-textColor duration-300">
              contact
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

          {openDialog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
              <div className="bg-white rounded-md shadow-lg p-4 py-2 flex max-w-4xl">
                <div className="w-full p-2">
                  <img
                    className="h-full"
                    src="https://img.freepik.com/free-vector/mobile-inbox-concept-illustration_114360-27348.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740"
                    alt="contact"
                  />
                </div>
                <div className="w-full p-2 relative">
                  <RxCross2
                    size={24}
                    className="absolute right-2 cursor-pointer text-slate-400 hover:text-black"
                    onClick={() => setOpenDialog(false)}
                  />
                  <div className="flex flex-col gap-5 mt-12 mb-7">
                    <TextField
                      fullWidth
                      size="small"
                      label="Full Name"
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      size="small"
                      label="Email"
                      variant="outlined"
                    />

                    <FormControl fullWidth size="small" variant="outlined">
                      <InputLabel id="demo-simple-select-label">
                        Select Service
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Select Service"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>SEO</MenuItem>
                        <MenuItem value={20}>Web Development</MenuItem>
                        <MenuItem value={30}>Graphics Design</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      label="Enquiry"
                      multiline
                      rows={4}
                      fullWidth
                      variant="outlined"
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 mt-2 rounded-md py-2 text-white  hover:opacity-80"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

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
