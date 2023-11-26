import React, { useState } from "react";
import { Logo, UserIcon, CaretCircleDown, CaretCircleUp } from "../../assets";
import "./index.css";

function Header() {
  const [openHeader, setOpenHeader] = useState(false);
  return (
    <div className="container header_main mx-auto">
      <div className="header">
        <img src={Logo} className="logo" />
        <div className="nav_links_div">
          <div className="text-black active_nav_link">
            Home
            <div className="active_nav_link_line"></div>
          </div>
          <div className="nav_link text-grey-350">How It Works</div>
          <div className="nav_link text-grey-350">Our Chefs</div>
          <div className="nav_link text-grey-350">Book</div>
        </div>
        <div className="login_signup_div">
          <span className="signup_btn w-24">
            <img src={UserIcon} className="user_icon" />
            <span className="signup_text text-grey-500">Sign Up</span>
          </span>
          <span className="login_signup_divider"></span>
          <span className="login_btn text-grey-500 w-12">Log In</span>
        </div>
      </div>
      <div className={"mobile_header"}>
        <div className="mobile_logo_div">
          <img src={Logo} className="mobile_logo" />
          <img
            src={openHeader ? CaretCircleUp : CaretCircleDown}
            className="mobile_open_drawer"
            onClick={() => {
              setOpenHeader(!openHeader);
            }}
          />
        </div>
        <div
          className={
            openHeader
              ? "mobile_header_content_visible"
              : "mobile_header_content_hidden"
          }
        >
          <div className="mobile_nav_links_div">
            <div className="text-black active_nav_link">
              Home
              <div className="active_nav_link_line"></div>
            </div>
            <div className="nav_link text-grey-350">How It Works</div>
            <div className="nav_link text-grey-350">Our Chefs</div>
            <div className="nav_link text-grey-350">Book</div>
          </div>
          <div className="mobile_login_signup_div">
            <div className="signup_btn w-full">
              <img src={UserIcon} className="user_icon" />
              <span className="signup_text text-grey-500">Sign Up</span>
            </div>
            <div className="login_btn text-grey-500 w-full">Log In</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
