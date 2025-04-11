import { IoChevronDownSharp, IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { MdPhone, MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaAws } from "react-icons/fa6";
import { FaFedex, FaStripe } from "react-icons/fa";
import { SiPuma } from "react-icons/si";

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

export const companyLogos = [
  {
    id: "01",
    icon: <FaAws />,
  },
  {
    id: "02",
    icon: <FaFedex />,
  },
  {
    id: "03",
    icon: <FaStripe />,
  },
  {
    id: "04",
    icon: <SiPuma />,
  },
]

export const aboutItems = [
  {
    id: "1",
    count: "2+",
    title: "Year of Experience",
  },
  {
    id: "2",
    count: "20+",
    title: "Project Completed",
  },
  {
    id: "3",
    count: "10+",
    title: "Happy Customers",
  },
];

export const socialMediaIcons = [
  {
    id: "1",
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/poojanaitam/",
  },
  {
    id: "2",
    icon: <FaInstagram />,
    url: "https://www.linkedin.com/in/poojanaitam/",
  },
  {
    id: "3",
    icon: <MdOutlineEmail />,
    url: "https://www.linkedin.com/in/poojanaitam/",
  },
  {
    id: "4",
    icon: <FaSquareXTwitter />,
    url: "https://www.linkedin.com/in/poojanaitam/",
  },
];

export const footerPrivacyLinks = [
  {
    id: "1",
    title: "Privacy Policy",
  },
  {
    id: "2",
    title: "Terms & Conditions",
  },
  {
    id: "3",
    title: "Support",
  },
];

export const services = [
  {
    id: "01",
    title: "SEO",
    icon: <MdOutlineDesignServices />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum!",
  },
  {
    id: "02",
    title: "Web Development",
    icon: <IoChevronDownSharp />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum!",
  },
  {
    id: "03",
    title: "UI/UX",
    icon: <IoChevronDownSharp />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum!",
  },
  {
    id: "04",
    title: "Google Ads",
    icon: <IoChevronDownSharp />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum!",
  },
  {
    id: "05",
    title: "Social Media Marketing",
    icon: <IoChevronDownSharp />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum!",
  },
  {
    id: "06",
    title: "Graphics Designer",
    icon: <IoChevronDownSharp />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum!",
  },
];

export const projects = [
  { id: 1, img: "src/assets/PersonalPortfolio.png", title: "Portfolio Website", category: "Web Development" },
  { id: 2, title: "SEO Audit Tool", category: "SEO" },
  { id: 3, title: "Brand Logo Design", category: "Graphic Design" },
  { id: 4, title: "E-commerce Site", category: "Web Development" },
  // ... more
];

export const testimonials = [
  {
    id: "1",
    icon: <FaQuoteLeft />,
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nihil repellendus veritatis?",
    img: "src/assets/DigitalGirl.avif",
    name:"Pooja Naitam",
    role: "web developer",
  },
  {
    id: "2",
    icon: <FaQuoteLeft />,
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nihil repellendus veritatis?",
    img: "src/assets/DigitalGirl.avif",
    name:"Digvijay Patil",
    role: "web developer",
  },
  {
    id: "3",
    icon: <FaQuoteLeft />,
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nihil repellendus veritatis?",
    img: "src/assets/DigitalGirl.avif",
    name:"Pooja Naitam",
    role: "web developer",
  },

]


export const contactInfo = [
  {
    id: "1",
    icon: <MdPhone />,
    title: "8748376464",
  },
  {
    id: "2",
    icon: <MdLocationPin />,
    title: "Pune, India",
  },
  {
    id: "3",
    icon: <MdOutlineEmail />,
    title: "hello@techenchant.com",
  },
];
