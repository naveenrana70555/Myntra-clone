import React from "react";
import { Carousel } from "antd";
import "./Carosel.css";

export function Carosel() {
  return (
    <div className="Carosel-main">
      <Carousel autoplay effect="fade">
        <div className="Carosel-sub">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
            alt="Loading"
            className="Carosel-image"
          />
        </div>
        <div className="Carosel-sub">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
            alt="Loading"
            className="Carosel-image"
          />
        </div>
        <div className="Carosel-sub">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif"
            alt="Loading"
            className="Carosel-image"
          />
        </div>
        <div className="Carosel-sub">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg"
            alt="Loading"
            className="Carosel-image"
          />
        </div>
        <div className="Carosel-sub">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg"
            alt="Loading"
            className="Carosel-image"
          />
        </div>
      </Carousel>
    </div>
  );
}
