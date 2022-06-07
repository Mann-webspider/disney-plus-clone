import React from "react";
import "../styles/Courosoul.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function courosoul() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    // <div className="courosoul">
    <Corosoul {...settings}>
      <Wrap>
        <a href="http://localhost:3000">
          <img
            // className="img"
            src="images/slider-badag.jpg"
            className="slider_img"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a href="http://localhost:3000">
          <img src="images/slider-badging.jpg" className="slider_img" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="http://localhost:3000">
          <img src="images/slider-scales.jpg" className="slider_img" alt="" />
        </a>
      </Wrap>
    </Corosoul>
    // </div>
  );
}

const Corosoul = styled(Slider)`
  margin-top: 90px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-slider {
    margin-left: -50px;
  }
  .slick-list {
    overflow: hidden;
  }

  .slick-prev {
    left: 25px;
  }
  .slick-next {
    right: 25px;
  }
`;
const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 250ms;
    }
  }
`;
export default courosoul;
