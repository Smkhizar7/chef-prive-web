import React from "react";
import {
  AppStoreBtnIcon,
  DownloadSectionBGBox,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  Ellipse5,
  GooglePlayBtnIcon,
  IceCreamCone,
  Iphone,
  IphoneLeftIcon,
  IphoneRightIcon,
  Pizza,
} from "../../../../assets";
import "./index.css";

function DownloadSection() {
  return (
    <div className="relative w-full section_div">
      <img src={DownloadSectionBGBox} className="bg_div" />
      <img src={Iphone} className="iphone_icon" />
      <img src={Pizza} className="pizza_icon" />
      <img src={IphoneLeftIcon} className="iphone_left_icon" />
      <img src={IphoneRightIcon} className="iphone_right_icon" />
      <img src={IceCreamCone} className="ice_cream_cone_icon" />
      <img src={Ellipse1} className="ellipse1_icon" />
      <img src={Ellipse2} className="ellipse2_icon" />
      <img src={Ellipse3} className="ellipse3_icon" />
      <img src={Ellipse4} className="ellipse4_icon" />
      <img src={Ellipse5} className="ellipse5_icon" />
      <div className="download_heading_div">
        <p className="download_heading text-white">Download our Mobile App</p>
        <div className="store_icon_div">
          <img src={GooglePlayBtnIcon} className="google_play_btn" />
          <img src={AppStoreBtnIcon} className="app_store_btn" />
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
