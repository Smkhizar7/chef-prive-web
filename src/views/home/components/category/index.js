import React from "react";
import "./index.css";
import {
  Birthdays,
  Desserts,
  Events,
  ExploreFood,
  MasterChef,
} from "../../../../assets";

function CategorySection() {
  return (
    <div className="lg:mb-10 mb-40">
      <div className="flex flex-row items-center gap-2 md:gap-4 lg:gap-5 xl:gap-10">
        <div className="bg-black heading_dash"></div>
        <div className="text-black category_heading">
          Browse by{" "}
          <span className="text-yellow category_heading">Categories</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-10 grid_div mt-4 md:mt-5 lg:mt-10">
        <div class="h-auto max-w-full rounded-lg grid_big_card row-span-2 text-white font-black">
          Explore Food
        </div>
        <div class="grid grid-cols-2 row-span-2 gap-4 md:gap-5 lg:gap-10">
          <div class="h-auto max-w-full rounded-lg grid_card1 text-white font-black">
            Master Chefs
          </div>
          <div class="h-auto max-w-full rounded-lg grid_card2 text-white font-black">
            Desserts
          </div>
          <div class="h-auto max-w-full rounded-lg grid_card3 text-white font-black">
            Events
          </div>
          <div class="h-auto max-w-full rounded-lg grid_card4 text-white font-black">
            Birthdays
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
