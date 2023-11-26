import React from "react";
import "./index.css";
import { Star, UserImg, CaretLeft, CaretRight } from "../../../../assets";

function ReviewSection() {
  return (
    <div className="md:mt-16 lg:mt-32 mb-44">
      <div>
        <p className="text-black review_heading">
          What our
          <br />
          <span className="text-yellow">Customers</span> says
        </p>
      </div>
      <div className="flex flex-row w-full max-w-full sm:mt-6 md:mt-8 lg:mt-12">
        <div className="flex flex-shrink-0 justify-center items-center sm:px-2">
          <div className="swipe_btn bg-yellow">
            <img src={CaretLeft} className="left_icon" />
          </div>
        </div>
        <div className="flex flex-row flex-grow overflow-x-clip justify-between gap-5">
          {[1, 2, 3].map((value) => {
            return (
              <div className="review_card_div bg-white">
                <div className="flex flex-row items-center">
                  <img src={UserImg} className="review_user_img" />
                  <div>
                    <p className="text-black user_title">William Smith</p>
                    <p className="text-grey-700 user_description">Customer</p>
                  </div>
                </div>
                <p className="text-dark_black review_text">
                  أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل
                  منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم
                  وأستمتع بها. هذه أفضل منصة
                </p>
                <div className="rating_div flex flex-row justify-end items-center">
                  <img src={Star} className="rating_icon" />
                  <p className="rating_text text-black">4.7</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-shrink-0 justify-center items-center px-2">
          <div className="swipe_btn bg-yellow">
            <img src={CaretRight} className="right_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
