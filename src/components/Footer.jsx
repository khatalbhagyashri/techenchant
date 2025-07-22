import {
  contactInfo,
  headerNavLink,
  services,
  socialMediaIcons,
} from "../constant/index";

function Footer() {
  return (
    <section className=" w-full h-full flex flex-col md:px-28 px-6 bg-[#DEF1FE] text-gray-600 ">
      <div className="bg-sky-00 flex flex-col md:flex-row justify-between border-b border-white py-10">
        <div className="md:w-[30%] mt-4">
          <h1 className="md:text-2xl text-xl uppercase font-bold text-textColor">
            TechEnchant
          </h1>
          <p className="text-lg font-medium mt-2 text-textColor">
            Let’s rise and create a <br /> powerful brand presence in<br />  this
            competitive era.
          </p>
            <div className="flex gap-5 mt-4">
            {socialMediaIcons.map((icon, id) => {
              return (
                <div key={id} className="">
                  <a href={icon.url} target="_blank" rel="noopener noreferrer">
                    <span className="text-3xl text-textColor">
                      {icon.icon}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:w-[15%] md:ml-12 mt-4">
          <h1 className="text-lg font-medium text-textColor">Quick Links</h1>
          {headerNavLink.map((item) => (
            <h1
              key={item.id}
              className="link text-base mt-1 cursor-pointer"
              onClick={() => {
                const section = document.getElementById(item.link);
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {item.title}
            </h1>
          ))}
        </div>
        <div className="md:w-[18%] mt-4">
          <h1 className="text-lg font-medium text-textColor">Services</h1>
          {services.map((service) => (
            <h1 key={service.id} className="link cursor-pointer text-base mt-1">
              {service.title}
            </h1>
          ))}
        </div>

        <div className="md:w-[20%] mt-4">
          <h1 className="text-lg font-medium text-textColor">Contact info</h1>
          {contactInfo.map((item) => (
            <h1
              key={item.id}
              className="flex items-center gap-3 text-base mt-1"
            >
              <span>{item.icon}</span>
              {item.title}
            </h1>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center py-5">
        <h1 className="text-base text-textColor">
          © TechEnchant. All Rights Reserved
        </h1>
      </div>
    </section>
  );
}

export default Footer;
