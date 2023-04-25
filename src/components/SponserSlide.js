import React, { Component } from "react";
import Slider from "react-slick";
import "./SponserSlide.css";
import sponserData from "../data/SponserData";

export default class SponserSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScrolls: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,

          }
        }
      ]
    };
    return (
      <div className="sponser-slider-wrapper">
        <h1 className="sponser-slider-title">Our Sponsers</h1>
        <Slider {...settings}>
          {sponserData.map((item) => {
            return (
              <div className="sponser-box">
                <img src={`${process.env.PUBLIC_URL}/imgs/sponsers/${item.image}`} alt={item.name}></img>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
