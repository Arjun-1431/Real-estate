import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

import '../CSSfiles/counter.css'; // Import CSS file

const Counter = () => {
  useEffect(() => {
    // jQuery animation initialization
    $('.timer').each(function () {
      var $this = $(this);
      $({ Counter: 0 }).animate({ Counter: $this.attr('data-to') }, {
        duration: parseInt($this.attr('data-speed')),
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
  }, []);

  return (
    <div className='body'>
      <h1>Creating Conveniences</h1>
      <h3>Streamline property search, compare listings, and schedule viewings effortlessly. Elevate your real estate experience with intuitive tools</h3>

      <div className="wrapper">
        <div className="counter col_fourth">
        <i class="fa-solid fa-calendar-days"></i>
          <h2 className="timer count-title count-number" data-to="46" data-speed="2000"></h2>
          <p className="count-text ">Years of Experience</p>
        </div>

        <div className="counter col_fourth">
        <i class="fa-solid fa-people-roof"></i>
          <h2 className="timer count-title count-number" data-to="18000" data-speed="2000"></h2>
          <p className="count-text ">Happy Families</p>
        </div>

        <div className="counter col_fourth">
        <i class="fa-solid fa-chart-area"></i>
          <h2 className="timer count-title count-number" data-to="30" data-speed="2000"></h2>
          <p className="count-text ">Million sq.ft Delivered</p>
        </div>

        <div className="counter col_fourth end">
        <i class="fa-solid fa-diagram-project"></i>
          <h2 className="timer count-title count-number" data-to="23" data-speed="2000"></h2>
          <p className="count-text ">Projects Across India</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
