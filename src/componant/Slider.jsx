import { useState, useEffect } from "react";
import leftChevron from "../assets/left-arrow.svg";
import rightChevron from "../assets/right-arrow.svg";
import "./Slider.css";
import sliderData from "../data/sliderData";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  function toggleImage(indexPayload) {
    // let newState;
    // if (indexPayload + sliderIndex > sliderData.length) {
    //   newState = 1;
    // } else if (indexPayload + sliderIndex < 1) {
    //   newState = sliderData.length;
    // } else {
    //   newState = indexPayload + sliderIndex;
    // }
    // setSliderIndex(newState);

    setSliderIndex((state) => {
      if (indexPayload + state > sliderData.length) {
        return 1;
      } else if (indexPayload + state < 1) {
        return sliderData.length;
      } else {
        return state + indexPayload;
      }
    });
  }

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 2000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-img"
        />
        <button
          // comme on appel une fonction avec un argument (1 ou -1) on est oblige de passer une fonction anonyme pour le rajouter en tant que eventListener.
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  );
}
