import '../CSSfiles/slider.css'
import React from 'react';

const Slider = () => {
  return (
    <div className="slides">
      <div className="slide slide-1">
        <img src={require('../Assets/slider.jpg')} alt="" />
      </div>
      <div className="slide slide-2">
        <img src={require('../Assets/slider4.jpg')} alt="" />
      </div>
      <div className="slide slide-3">
        <img src={require('../Assets/slider2.jpg')} alt="" />
      </div>
    </div>
  );
};

export default Slider;
