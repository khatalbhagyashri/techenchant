import { IoChevronDownSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

export const headerNavLink = [
  { id: "1", title: "Home", path: "/" },
  { id: "2", title: "About", path: "/about" },
  {
    id: "3",
    title: "Services",
    path: "/services",
    icon: <IoChevronDownSharp />,
    subMenu: ["Web Development", "SEO", "Design"],
  },
  { id: "4", title: "Projects", path: "/projects" },
];

export const socialMediaIcons = [
  {
    id: "1",
    icon : <FaInstagram />,
    url: "https://www.linkedin.com/in/poojanaitam/"
  },
  {
    id: "2",
    icon : <FaInstagram />,
    url: "https://www.linkedin.com/in/poojanaitam/"
  },
  {
    id: "3",
    icon : <FaInstagram />,
    url: "https://www.linkedin.com/in/poojanaitam/"
  },
  {
    id: "4",
    icon : <FaInstagram />,
    url: "https://www.linkedin.com/in/poojanaitam/"
  },
]

export const footerPrivacyLinks = [
  {
    id :"1",
    title: "Privacy Policy"
  },
  {
    id :"2",
    title: "Terms & Conditions"
  },
  {
    id :"3",
    title: "Support"
  },
]