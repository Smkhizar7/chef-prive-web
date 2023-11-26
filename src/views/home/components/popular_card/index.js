import React from "react";
import { Chef, Dish1, Star } from "../../../../assets";
import "./index.css";

function PopularCard() {
  return (
    <div className="bg-white popular_card">
      <img src={Dish1} className="popular_card_img" />
      <div className="popular_card_content">
        <p className="popular_card_title text-black">Menu Title Here</p>
        <p className="popular_card_description">
          Pick <span className="popular_card_product_count text-yellow">5</span>{" "}
          out of{" "}
          <span className="popular_card_product_count text-yellow">10</span>{" "}
          dishes
        </p>
        <p className="product_price">QAR 200</p>
        <div className="flex flex-row justify-between chef_div">
          <div className="flex flex-row items-center gap-2">
            <img src={Chef} className="chef_icon" />
            <span className="chef_title text-black">Marriot Head Chef</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={Star} className="rating_star" />
            <span className="rating_number text-black">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCard;
