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
import { GoLightBulb } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiToolsFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export const headerNavLink = [
  { id: "1", title: "Home", link: "/" },
   {
    id: "2",
    title: "Services",
    link: "/services",
    icon: <IoChevronDownSharp />,
    subMenu: [
      {
        title: "Web Development",
        link: "/services/web-dev",
      },
      { title: "SEO", link: "/services/seo" },
      {
        title: "Design",
        link: "/services/design",
      },
    ],
  },
  { id: "3", title: "About", link: "/about" },
  { id: "4", title: "Works", link: "/works" },
  { id: "5", title: "Blogs", link: "/blogs" },
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
  {
    id: "4",
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com/people/Techenchant/61578327130433/",
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

export const blogPosts = [
  {
    id: 1,
    title: "Top 5 SEO Trends in 2025",
    img: "https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740",
    date: "June 26, 2025",
    author: "TechEnchant",
    content:
      "Discover how AI, voice search, and mobile-first indexing are changing SEO this year...",
  },
  {
    id: 2,
    title: "Why Every Brand Needs a Social Media Strategy",
    img: "https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740",
    date: "June 20, 2025",
    author: "TechEnchant",
    content:
      "Learn how consistent social media content builds brand trust and increases conversions...",
  },
  {
    id: 3,
    title: "Why Every Brand Needs a Social Media Strategy",
    date: "June 20, 2025",
    img: "https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740",
    author: "TechEnchant",
    content:
      "Learn how consistent social media content builds brand trust and increases conversions...",
  },
  {
    id: 4,
    title: "Why Every Brand Needs a Social Media Strategy",
    date: "June 20, 2025",
    img: "https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid&w=740",
    author: "TechEnchant",
    content:
      "Learn how consistent social media content builds brand trust and increases conversions...",
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

export const webDevService = [
  {
    id: "1",
    icon: <GoLightBulb />,
    title: "Custom Website Development",
    content:
      "Tailored web solutions built from scratch—crafted to match your brand, business goals, and audience.",
  },
  {
    id: "2",
    icon: <IoCartOutline />,
    title: "E-commerce Web Development",
    content:
      "Build powerful online stores using Shopify, WooCommerce, or custom solutions. Secure payment, smooth checkout, and mobile-optimized.",
  },
  {
    id: "3",
    icon: <FaMobileScreenButton />,
    title: "Responsive Design",
    content:
      "Websites that look and work perfectly across all devices—mobiles, tablets, and desktops.",
  },
  {
    id: "4",
    icon: <AiFillThunderbolt />,
    title: "Performance & Speed Optimization",
    content:
      "Blazing fast load times and optimized performance for better SEO and user experience.",
  },
  {
    id: "5",
    icon: <RiToolsFill />,
    title: "Website Redesign & Revamp",
    content:
      "Already have a website? We revamp outdated sites into modern, engaging, and efficient platforms.",
  },
];

export const techStack = [
  {
    id: "1",
    title: "Frontend",
    subTitle: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Backend",
    subTitle: ["Node.js", " Express.js", "MongoDB"],
  },
  { id: "3", title: "CMS", subTitle: ["WordPress", "Headless CMS (Strapi)"] },
  {
    id: "4",
    title: "Tools",
    subTitle: ["Git", "GitHub", "Vercel", "Netlify", "Render "],
  },
];
