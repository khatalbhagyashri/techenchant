import { IoChevronDownSharp, IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { MdPhone, MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaAws } from "react-icons/fa6";
import { FaFedex, FaStripe } from "react-icons/fa";
import { SiPuma } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { SlGlobe } from "react-icons/sl";

export const headerNavLink = [
  { id: "1", title: "Home", path: "/", refKey: "contactRef"  },
  { id: "2", title: "About", path: "/about", refKey: "aboutSection"   },
  {
    id: "3",
    title: "Services",
    path: "/services",
    icon: <IoChevronDownSharp />,
    subMenu: ["Web Development", "SEO", "Design"],
  },
  { id: "4", title: "Projects", path: "/projects" },
  { id: "5", title: "Blogs", path: "/blogs" },
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
];

export const aboutItems = [
  {
    id: "1",
    count: "2+",
    title: "Year of\nExperience",
  },
  {
    id: "2",
    count: "20+",
    title: "Project\nCompleted",
  },
  {
    id: "3",
    count: "10+",
    title: "Happy\nCustomers",
  },
];

export const socialMediaIcons = [
  {
    id: "1",
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/company/techenchant/?viewAsMember=true",
  },
  {
    id: "2",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/techenchant8/?hl=en",
  },
  {
    id: "3",
    icon: <FaSquareXTwitter />,
    url: "https://x.com/TechEnchant",
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
    icon: <FiSearch />,
    content:
      "From audits to backlinks, we deliver measurable SEO growth tailored to your goals.",
  },
  {
    id: "02",
    title: "Web Development",
    icon: <SlGlobe />,
    content:
      "We turn your Figma or design into responsive, fast-loading React or HTML/CSS websites.",
  },
  {
    id: "03",
    title: "Graphics Designer",
    icon: <MdOutlineDesignServices />,
    content:
      "From logos to social media posts, we design visuals that are creative, colorful, and on-brand.",
  },

  // {
  //   id: "04",
  //   title: "Google Ads",
  //   icon: <IoChevronDownSharp />,
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum!",
  // },
  // {
  //   id: "05",
  //   title: "Social Media Marketing",
  //   icon: <IoChevronDownSharp />,
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum!",
  // },
  // {
  //   id: "06",
  //   title: "UI/UX",
  //   icon: <IoChevronDownSharp />,
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum!",
  // },
];

export const projects = [
  {
    id: 1,
    img: "https://img.freepik.com/free-psd/forests-day-landing-page-template-with-photo_23-2148881411.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740",
    title: "Portfolio Website",
    category: "Web Development",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-psd/flat-design-webinar-template_23-2150390595.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740",
    title: "SEO Audit Tool",
    category: "SEO",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-vector/business-landing-page-with-photo_23-2148312357.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740",
    title: "Brand Logo Design",
    category: "Graphic Design",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-psd/holiday-landing-page-template_23-2149066886.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740",
    title: "E-commerce Site",
    category: "Web Development",
  },
  // ... more
];

export const testimonials = [
  {
    id: "1",
    icon: <FaQuoteLeft />,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nihil repellendus veritatis?",
    img: "src/assets/DigitalGirl.avif",
    name: "Pooja Naitam",
    role: "web developer",
  },
  {
    id: "2",
    icon: <FaQuoteLeft />,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nihil repellendus veritatis?",
    img: "src/assets/DigitalGirl.avif",
    name: "Digvijay Patil",
    role: "web developer",
  },
  {
    id: "3",
    icon: <FaQuoteLeft />,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nihil repellendus veritatis?",
    img: "src/assets/DigitalGirl.avif",
    name: "Pooja Naitam",
    role: "web developer",
  },
  {
    id: "4",
    icon: <FaQuoteLeft />,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nihil repellendus veritatis?",
    img: "src/assets/DigitalGirl.avif",
    name: "Salman Khan",
    role: "web developer",
  },
];

export const contactInfo = [
  {
    id: "1",
    icon: <MdPhone />,
    title: "0000000001",
  },
  {
    id: "2",
    icon: <MdLocationPin />,
    title: "Pune, India",
  },
  {
    id: "3",
    icon: <MdOutlineEmail />,
    title: "techenchant8@gmail.com",
  },
];
