import React from "react";
import "./internship.css";
import Cities from "./Cities/Cities";
import Categories from "./Categories/Categories";

const Internship = () => {
  return (
    <div className="internship_container">
      <div className="heading_container">
        <div className="heading_left">
          <h1 className="internship_heading">Internships</h1>
          <p className="small_heading">Apply to 10,000+ internships for free</p>
        </div>
        <div className="heading_right">
          <p className="internship_link">view all internships &#8594;</p>
        </div>
      </div>
      <div className="cities">
        <Cities />
      </div>
      <div className="categories">
        <Categories />
      </div>
    </div>
  );
};

export default Internship;
