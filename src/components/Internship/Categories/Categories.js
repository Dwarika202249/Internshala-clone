import React from "react";
import "./categories.css";
import parttime from "../../../images/Categories/parttime.PNG";
import engineering from "../../../images/Categories/engineering.PNG";
import ngo from "../../../images/Categories/ngo.PNG";
import mba from "../../../images/Categories/mba.PNG";
import design from "../../../images/Categories/design.PNG";
import science from "../../../images/Categories/science.PNG";
import media from "../../../images/Categories/media.PNG";
import humanities from "../../../images/Categories/humanities.PNG";

const Categories = () => {
  return (
    <div className="cities_container">
      <h2 className="cities_heading">Popular cities</h2>
      <div className="card_container">
        <div className="card">
          <img src={parttime} alt="city" className="city_img" />
          <p className="city_name">Part-time</p>
        </div>
        <div className="card">
          <img src={engineering} alt="city" className="city_img" />
          <p className="city_name">Engineering</p>
        </div>
        <div className="card">
          <img src={ngo} alt="city" className="city_img" />
          <p className="city_name">NGO</p>
        </div>
        <div className="card">
          <img src={mba} alt="city" className="city_img" />
          <p className="city_name">MBA</p>
        </div>
        <div className="card">
          <img src={design} alt="city" className="city_img" />
          <p className="city_name">Design</p>
        </div>
        <div className="card">
          <img src={science} alt="city" className="city_img" />
          <p className="city_name">Science</p>
        </div>
        <div className="card">
          <img src={media} alt="city" className="city_img" />
          <p className="city_name">Media</p>
        </div>
        <div className="card">
          <img src={humanities} alt="city" className="city_img" />
          <p className="city_name">Humanities</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
