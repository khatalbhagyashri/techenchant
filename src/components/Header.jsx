import React, { useState } from "react";
import { headerNavLink } from "../constant";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import TextField from "@mui/material/TextField";
import { MdArrowOutward } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const location = useLocation();

  const [age, setAge] = React.useState("");
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full fixed top-0 z-10 flex justify-between items-center px-3 md:px-28 md:py-5 py-7 bg-[#e8f1fa]">
      {/* Logo */}
      <div>
        <Link to="/">
          <h1 className="md:text-2xl text-xl uppercase font-bold bg-gradient-to-t from-primaryColor to-blue-300 text-transparent bg-clip-text">
            TechEnchant.
          </h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="md:flex gap-4 uppercase hidden ">
        {headerNavLink.map((item) => (
          <div key={item.id} className="relative group list-none ">
            {/* Main Nav Item */}
            <ul>
              <li>
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-base transition-all duration-300 flex items-center gap-2 ${
                    location.pathname === item.path
                      ? " text-primaryColor active"
                      : "hover:text-primaryColor text-black "
                  }`}
                >
                  {item.title} <span>{item.icon}</span>
                </Link>
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
                      {subItem}
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
      <div className="hidden md:flex">
        <button
          onClick={() => setOpenDialog(!openDialog)}
          className=" border relative flex items-center border-primaryColor 
      rounded-full px-4 py-2  group overflow-hidden transition-all duration-300 w-[125px]"
        >
          {/* Enquiry Text (Hidden on Hover) */}
          <span className="group-hover:opacity-0 transition-opacity text-primaryColor duration-300">
            contact
          </span>

          {/* Icon Container (Expands on Hover) */}
          <div
            className="absolute right-0 w-10 h-10 bg-primaryColor rounded-full p-1.5 flex items-center justify-center 
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
  );
}

export default Header;
