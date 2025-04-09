import React from "react";
import { footerPrivacyLinks, socialMediaIcons } from "../constant/index";

function Footer() {
  return (
    <div className="relative flex flex-col bottom-0 w-full bg-red-500 ">
      <div className="bg-red-300">
        <h1 className="text-2xl font-semibold">TechEnchant</h1>
      </div>

      <div className="bg-red-400 flex justify-between items-center px-28 py-5">
        <div className="flex gap-2">
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
