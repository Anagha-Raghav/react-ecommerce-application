import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import { SliderData } from "../ProductData/ProductData";
const ImageSlider = () => {
  return (
    <div>
      <div className="Slider">
        <Carousel controls={false} indicators={false}>
          {SliderData.map((item) => (
            <Carousel.Item key={item.id} interval={1000}>
              <img
                className="sliderImage d-block ms-auto"
                src={item.cover}
                alt={item.title}
              />
              <Carousel.Caption style={{ top: "40%", left: "10%" }}>
                <h3 className="sliderTitle">{item.title}</h3>
                <p className="sliderDescription">{item.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageSlider;
