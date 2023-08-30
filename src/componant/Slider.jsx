import { useState, useEffect } from "react";
import sliderData from "../data/sliderData";
import "./Slider.css";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

export default function Slider() {
  const [sliderIndex, setSliderindex] = useState(1);

  function toggleImage(indexPayload) {
    // let newState;
    // if (indexPayload + sliderIndex > sliderData.length) {
    //   newState = 1;
    // } else if (indexPayload + sliderIndex < 1) {
    //   newState = sliderData.length;
    // } else {
    //   newState = indexPayload + sliderIndex;
    // }
    // setSliderindex(newState);

    setSliderindex((state) => {
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
    const intervalID = setInterval(() => toggleImage(1), 3000);
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
          src={sliderData.find((obj) => obj.id === sliderIndex).content}
          alt="incense stick"
          className="slider-img"
        />
        <button
          // comme on appel une fonction avec un argument (1 ou -1) on est oblige de passer une fonction anonyme pour le rajouter en tant que eventListener.
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftArrow} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightArrow} alt="next image" />
        </button>
      </div>
    </>
  );
}
