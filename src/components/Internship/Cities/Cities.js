import React from "react";
import "./cities.css";
import work from "../../../images/Cities/work.PNG";
import delhi from "../../../images/Cities/delhi.PNG";
import bangalore from "../../../images/Cities/bangalore.PNG";
import mumbai from "../../../images/Cities/mumbai.PNG";
import hyderabad from "../../../images/Cities/hyderabad.PNG";
import chennai from "../../../images/Cities/chennai.PNG";
import kolkata from "../../../images/Cities/kolkata.PNG";
import international from "../../../images/Cities/international.PNG";

const Cities = () => {
  return (
    <div className="cities_container">
      <h2 className="cities_heading">Popular cities</h2>
      <div className="card_container">
        <div className="card">
          <img src={work} alt="city" className="city_img" />
          <p className="city_name">Work from home</p>
        </div>
        <div className="card">
          <img src={delhi} alt="city" className="city_img" />
          <p className="city_name">Delhi/NCR</p>
        </div>
        <div className="card">
          <img src={bangalore} alt="city" className="city_img" />
          <p className="city_name">Bangalore</p>
        </div>
        <div className="card">
          <img src={mumbai} alt="city" className="city_img" />
          <p className="city_name">Mumbai</p>
        </div>
        <div className="card">
          <img src={hyderabad} alt="city" className="city_img" />
          <p className="city_name">Hyderabad</p>
        </div>
        <div className="card">
          <img src={kolkata} alt="city" className="city_img" />
          <p className="city_name">Kolkata</p>
        </div>
        <div className="card">
          <img src={chennai} alt="city" className="city_img" />
          <p className="city_name">Chennai</p>
        </div>
        <div className="card">
          <img src={international} alt="city" className="city_img" />
          <p className="city_name">International</p>
        </div>
      </div>
    </div>
  );
};

export default Cities;
