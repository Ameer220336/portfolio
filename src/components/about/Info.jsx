import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <div className="about__title">Experience</div>
        <span className="about__subtitle">4 Years</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <div className="about__title">10 + Projects</div>
        <span className="about__subtitle">4 Years</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <div className="about__title">Support</div>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
