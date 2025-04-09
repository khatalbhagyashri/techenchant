import React, { useState } from "react";
import { headerNavLink } from "../constant";
import { Dialog } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import TextField from "@mui/material/TextField";
import { MdArrowOutward } from "react-icons/md";

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const location = useLocation();

  return (
    <div className="bg-sky-300">
      <div className="flex justify-between items-center px-28 py-6 bg-green-00">
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
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
      rounded-full px-4 py-2 group overflow-hidden transition-all duration-300 w-[120px]"
          >
            {/* Enquiry Text (Hidden on Hover) */}
            <span className="group-hover:opacity-0 transition-opacity duration-300">
              Enquiry
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
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
              <div className="p-4 py-10 flex bg-sky-100">
                <div className="w-full p-2">
                  <img
                    className=" h-full"
                    src="https://img.freepik.com/free-vector/mobile-inbox-concept-illustration_114360-27348.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740"
                  />
                </div>
                <div className="w-full p-2">
                  <RxCross2
                    size={24}
                    className="absolute top-4 right-8  cursor-pointer text-slate-400 hover:text-black"
                    onClick={() => setOpenDialog(false)}
                  />
                  <div className="flex flex-col gap-3 mt-8">
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Equiry"
                      multiline
                      rows={4}
                    />
                    <button
                      type="submit"
                      className="border border-slate-400 rounded-md py-2  text-slate-500 hover:border-black hover:text-black"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
