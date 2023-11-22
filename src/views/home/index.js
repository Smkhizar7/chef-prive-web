import React from "react";
import { Layout } from "antd";
import { Header } from "../../components";
import {
  Calendar,
  CaretCircleDown,
  CaretCircleUp,
  CaretDown,
  UpArrow,
  Users,
  CaretRight,
  IceCreams,
  Sweets,
  Spoon,
  Bowl,
  Tray,
  Spring,
} from "../../assets";
import "./index.css";

function Home() {
  return (
    <Layout className="layout container">
      <Header />
      <div className="content">
        <div className="lg:mt-10 md:mt-6 flex sm:flex-row flex-wrap flex-col">
          <div className="left_banner_div">
            <div className="flex flex-col mt-12 md:mt-0">
              <div className="flex flex-row flex-wrap gap-2 sm:gap-5 md:gap-3">
                <span className="text-black banner_text">Book </span>
                <span className="text-yellow banner_text">Private Chef</span>
              </div>
              <span className="text-black  banner_text">for your</span>
              <div className="flex flex-row flex-wrap gap-2 sm:gap-5 md:gap-3">
                <span className="text-black banner_text">Dinner</span>
                <span className="text-yellow banner_text">Party</span>
              </div>
            </div>
            <div className="mt-5 banner_desc_div">
              <p className="banner_desc text-grey-500">
                We’re providing the best Chef booking platform.
              </p>
              <p className="banner_desc text-grey-500">
                Choose a menu and book your Chef instantly
              </p>
            </div>
          </div>
          <div className="right_banner_div relative">
            <img src={Spoon} className="spoon_icon" />
            <img src={IceCreams} className="ice_creams_icon" />
            <img src={Sweets} className="sweets_icon" />
            <img src={Spring} className="spring_icon" />
            <img src={Bowl} className="bowl_icon" />
            <img src={Tray} className="tray_icon" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-start items-center gap-5 mt-5 sm:mt-10">
          <div className=" p-7 md:p-5 bg-white filter_div">
            <div className="flex flex-row">
              <img src={UpArrow} className="up_arrow" />
              <div>
                <div className="flex flex-row justify-between items-center">
                  <span className="region_filter_text">Select region</span>
                  <img src={CaretDown} className="filter_dropdown_icon" />
                </div>
                <div className="flex flex-row justify-between items-center mt-5">
                  <span className="select_region_text text-grey-500">
                    Al Shamal
                  </span>
                  <span className="select_region_text text-grey-500">
                    الشمال
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <img src={Calendar} className="calendar_icon" />
              <div>
                <div className="flex flex-row justify-between items-center">
                  <span className="region_filter_text">Select date</span>
                  <img src={CaretDown} className="filter_dropdown_icon" />
                </div>
                <div className="select_region_text text-grey-500 mt-5">
                  15 Jan - 20 Jan 2022
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <img src={Users} className="users_icon" />
              <div>
                <span className="region_filter_text">Select persons</span>
                <div className="flex flex-row justify-start items-center mt-5 gap-4">
                  <img src={CaretCircleDown} className="person_dropdown_icon" />
                  <div className="select_region_text text-grey-500 ">5</div>
                  <img src={CaretCircleUp} className="person_dropdown_icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="next_btn bg-yellow">
            <img src={CaretRight} className="next_btn_icon" />
          </div>
        </div>
      </div>
      <div className="footer">Footer</div>
    </Layout>
  );
}

export default Home;
