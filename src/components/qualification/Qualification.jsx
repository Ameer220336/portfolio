import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Academic Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Masters */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Master's of Business Infromation System
                </h3>
                <span className="qualification__subtitle">
                  Australian Institute of Higher Education
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* Bachelors */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Bachelors in Computer Science and Information Technology
                </h3>
                <span className="qualification__subtitle">
                  Tribhuvan University - Nepal
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2020
                </div>
              </div>
            </div>
            {/* +2 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Higher Secondary School - Science
                </h3>
                <span className="qualification__subtitle">HSEB - Nepal</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2014
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* SQM */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">SQM Research</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* Zillicom */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Laravel (Backend) Developer
                </h3>
                <span className="qualification__subtitle">Zillicom.com</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
            </div>
            {/* Kite Nepal */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Laravel Developer</h3>
                <span className="qualification__subtitle">Kite Nepal</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
