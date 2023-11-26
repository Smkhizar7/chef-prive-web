import React from "react";
import PopularCard from "../popular_card";
import "./index.css";

function PopularSection() {
  return (
    <div className="flex flex-col md:flex-row w-full mt-32 xl:mt-48 mb-36 xl:mb-64 gap-4 sm:gap-10 overflow-x-clip popular_div relative">
      <div className="min-w-fit flex flex-row md:flex-col justify-between items-center md:justify-start md:items-start">
        <div className="sm:mb-10">
          <p className="text-black popular_heading_text">Our Most</p>
          <p className="text-yellow popular_heading_text">Popular Dishes</p>
          <p className="text-black popular_heading_text">This Month</p>
        </div>
        <span className="see_all_btn text-white bg-yellow">See all</span>
      </div>
      <div className="overflow-x-scroll flex flex-row gap-10 px-2 py-1 overflow-y-visible popular_main_div">
        {[1, 2, 3, 4].map((value) => {
          return <PopularCard />;
        })}
        <div className="blur_div"></div>
      </div>
    </div>
  );
}

export default PopularSection;
