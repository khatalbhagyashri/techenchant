import React from "react";
import {
  contactInfo,
  footerPrivacyLinks,
  headerNavLink,
  services,
  socialMediaIcons,
} from "../constant/index";

function Footer() {
  return (
    <div className=" w-full h-full bg-sky-300 flex flex-col px-28 ">
      <div className="bg-sky-00 flex justify-between border-b py-8">
        <div className="w-[40%]">
          <h1 className="text-2xl font-extrabold uppercase">TechEnchant</h1>
          <p className="text-base mt-2">
            We blend creativity with technology to craft impactful digital
            experiences that drive measurable growth. From SEO and paid ads to
            branding and web development, we help you enchant your audience and
            stay ahead in the digital game.
          </p>
        </div>

        <div className="w-[15%] ml-12">
          <h1 className="text-lg font-medium">Quick Links</h1>
          {headerNavLink.map((item) => (
            <h1 key={item.id} className="text-sm mt-1">
              {item.title}
            </h1>
          ))}
        </div>
        <div className="w-[18%] ">
          <h1 className="text-lg font-medium">Services</h1>
          {services.map((service) => (
            <h1 key={service.id} className="text-sm mt-1">
              {service.title}
            </h1>
          ))}
        </div>

        <div className="w-[20%]">
          <h1 className="text-lg font-medium">Contact info</h1>
          {contactInfo.map((item) => (
            <h1 key={item.id} className="flex items-center gap-3 text-sm mt-1">
              <span>{item.icon}</span>
              {item.title}
            </h1>
          ))}
        </div>
      </div>

      <div className=" flex justify-between items-center py-5">
        <div className="flex gap-5">
          {socialMediaIcons.map((icon, id) => {
            return (
              <div key={id} className="">
                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                  <span className="text-3xl">{icon.icon}</span>
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex gap-8">
          {footerPrivacyLinks.map((privacyLink) => (
            <h1 key={privacyLink.id}>{privacyLink.title}</h1>
          ))}
        </div>
        <div>
          <h1>© TechEnchant. All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
