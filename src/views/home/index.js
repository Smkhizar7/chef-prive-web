import React from "react";
import { Layout } from "antd";
import { Logo, UserIcon } from "../../assets";
import "./index.css";

const { Header, Footer, Content } = Layout;

function Home() {
  return (
    <Layout className="layout container">
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
          <span className="signup_btn">
            <img src={UserIcon} className="user_icon" />
            <span className="signup_text text-grey-500">Sign Up</span>
          </span>
          <span className="login_signup_divider"></span>
          <span className="login_btn text-grey-500">Log In</span>
        </div>
      </div>
      <div className="content">
        <div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <span className="text-black banner_text">Book </span>
              <span className="text-yellow banner_text ml-5">Private Chef</span>
            </div>
            <span className="text-black  banner_text">for your</span>
            <div className="flex flex-row">
              <span className="text-black banner_text">Dinner</span>
              <span className="text-yellow banner_text ml-5">Party</span>
            </div>
          </div>
          <div>
            <p>We’re providing the best Chef booking platform.</p>
            <p>Choose a menu and book your Chef instantly</p>
          </div>
        </div>
      </div>
      <div className="footer">Footer</div>
    </Layout>
  );
}

export default Home;
