import {
  contactInfo,
  headerNavLink,
  services,
  socialMediaIcons,
} from "../constant/index";

function Footer() {
  return (
    <section className=" w-full h-full  flex flex-col md:px-28 px-6 bg-[#DEF1FE] ">
      <div className="bg-sky-00 flex flex-col md:flex-row justify-between border-b border-white py-5">
        <div className="md:w-[40%] mt-4">
          <h1 className="md:text-2xl text-xl uppercase font-bold bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text">
            TechEnchant
          </h1>
          <p className="text-base mt-2 font-light">
            We blend creativity with technology to craft impactful <br />{" "}
            digital experiences that drive measurable growth. From <br /> SEO
            and paid ads to branding and web development,
            <br /> we help you enchant your audience and stay ahead in the
            digital game.
          </p>
        </div>

        <div className="md:w-[15%] md:ml-12 mt-4">
          <h1 className="text-lg font-medium text-primaryColor">Quick Links</h1>
          {headerNavLink.map((item) => (
            <h1
              key={item.id}
              className="link text-base mt-1 cursor-pointer"
              onClick={() => {
                const section = document.getElementById(item.link);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.title}
            </h1>
          ))}
        </div>
        <div className="md:w-[18%] mt-4">
          <h1 className="text-lg font-medium text-primaryColor">Services</h1>
          {services.map((service) => (
            <h1 key={service.id} className="text-base mt-1">
              {service.title}
            </h1>
          ))}
        </div>

        <div className="md:w-[20%] mt-4">
          <h1 className="text-lg font-medium text-primaryColor">
            Contact info
          </h1>
          {contactInfo.map((item) => (
            <h1
              key={item.id}
              className="flex items-center gap-3 text-base mt-1"
            >
              <span>{item.icon}</span>
              {item.title}
            </h1>
          ))}

          <div className="flex gap-5 mt-8">
            {socialMediaIcons.map((icon, id) => {
              return (
                <div key={id} className="">
                  <a href={icon.url} target="_blank" rel="noopener noreferrer">
                    <span className="text-3xl text-orange-600">
                      {icon.icon}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-5">
        <h1 className="text-base text-primaryColor">
          © TechEnchant. All Rights Reserved
        </h1>
      </div>
    </section>
  );
}

export default Footer;
