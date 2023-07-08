import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills_title">Frontend Development</h3>
      <div className="skills__box">
        <div className="skills_group">
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">Advance</span>
            </div>
          </div>

          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>

          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Bootstrap</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Javascript</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">GIT</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
