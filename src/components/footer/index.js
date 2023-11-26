import React from "react";
import {
  Mail,
  Phone,
  WhiteLogo,
  Location,
  UpLeftArrow,
  Facebook,
  Twitter,
  Instagram,
} from "../../assets";
import "./index.css";

function Footer() {
  return (
    <div className="bg-black">
      <div className="footer container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="footer_logo_div">
            <img src={WhiteLogo} className="footer_logo" />
          </div>
          <div className="address_links_div flex flex-col md:flex-row justify-start lg:justify-between gap-10">
            <div className="address_div flex flex-col justify-between gap-2">
              <p className="address_heading text-yellow">Address</p>
              <div className="flex flex-row items-center gap-2">
                <img src={Location} className="link_icon" />
                <p className="address_text text-white">
                  Park Avenue South, New York, 74812, United States
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={Mail} className="link_icon" />
                <p className="address_text text-white">contact@chefprive.com</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={Phone} className="link_icon" />
                <p className="address_text text-white">000-123-456</p>
              </div>
              <div className="flex flex-row gap-5 mt-5">
                <span className="address_text text-white cursor-pointer hover:underline">
                  FAQ’s
                </span>
                <span className="address_text text-white cursor-pointer hover:underline">
                  Contact Us
                </span>
              </div>
            </div>
            <div className="links_div flex flex-col justify-between gap-2">
              <p className="address_heading text-yellow">Links</p>
              <p className="address_text text-white cursor-pointer hover:underline">
                Home
              </p>
              <p className="address_text text-white cursor-pointer hover:underline">
                How it works
              </p>
              <p className="address_text text-white cursor-pointer hover:underline">
                Our Chefs
              </p>
              <p className="address_text text-white cursor-pointer hover:underline">
                Reviews
              </p>
              <p className="address_text text-white cursor-pointer hover:underline">
                What's new
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col justify-between gap-5 newsletter_social_div">
            <div className="newsletter_div">
              <p className="text-yellow subscribe_text">
                Subcribe to Newsletter
              </p>
              <div className="flex flex-row gap-2 mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="email_field bg-white"
                />
                <div className="submit_btn bg-yellow">
                  <img src={UpLeftArrow} className="submit_icon" />
                </div>
              </div>
            </div>
            <div className="social_div">
              <p className="social_text text-white">Our Social</p>
              <div className="flex flex-row gap-5 mt-4">
                <img className="social_icon" src={Facebook} />
                <img className="social_icon" src={Twitter} />
                <img className="social_icon" src={Instagram} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-16">
          <div className="horizontal_line"></div>
          <p className="md:mx-10 copyright_text text-white md:flex-shrink-0">
            Copyrights 2022 Chef Prive - All Rights Reserved
          </p>
          <div className="horizontal_line"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
