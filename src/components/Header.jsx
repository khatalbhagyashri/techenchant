import React, { useState } from "react";
import { headerNavLink } from "../constant";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import TextField from "@mui/material/TextField";
import { MdArrowOutward } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const location = useLocation();

  const [age, setAge] = React.useState("");

  return (
    <div className="flex justify-between items-center px-28 py-6 bg-blue-300">
      {/* Logo */}
      <div>
        <h1 className="text-2xl uppercase font-bold bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text">
          TechEnchant.
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4 uppercase ">
        {headerNavLink.map((item) => (
          <div key={item.id} className="relative group list-none ">
            {/* Main Nav Item */}
            <li>
              <Link
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  location.pathname === item.path
                    ? "text-purple-700 "
                    : "hover:text-purple-700"
                }`}
              >
                {item.title} <span>{item.icon}</span>
              </Link>
            </li>

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

      {/* Enquiry Button with Dialog */}
      <div className="">
        <button
          onClick={() => setOpenDialog(!openDialog)}
          className="border relative flex items-center border-black hover:border-slate-500 
      rounded-full px-4 py-2 group overflow-hidden transition-all duration-300 w-[125px]"
        >
          {/* Enquiry Text (Hidden on Hover) */}
          <span className="group-hover:opacity-0 transition-opacity duration-300">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-md shadow-lg p-4 py-5 flex max-w-4xl">
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
                <div className="flex flex-col gap-3 mt-12">
                  <TextField fullWidth label="Full Name" variant="outlined" />
                  <TextField fullWidth label="Email" variant="outlined" />

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
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      {/* <MenuItem value={30}>Thirty</MenuItem> */}
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
                    className="bg-blue-500 rounded-md py-2 text-white  hover:opacity-80"
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
