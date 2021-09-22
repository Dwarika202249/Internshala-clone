import React from "react";
import "./training.css";
import python from "../../images/Trainings/python.PNG";
import digimarketing from "../../images/Trainings/digimarketing.PNG";
import webdev from "../../images/Trainings/webdev.PNG";
import ml from "../../images/Trainings/ml.PNG";
import excel from "../../images/Trainings/excel.PNG";
import hack from "../../images/Trainings/hack.PNG";
import autocad from "../../images/Trainings/autocad.PNG";
import writing from "../../images/Trainings/writing.PNG";

const Training = () => {
  return (
    <div className="internship_container">
      <div className="heading_container">
        <div className="heading_left">
          <h1 className="internship_heading">Internshala Trainings</h1>
          <p className="small_heading">Learn new-age skills on the go</p>
        </div>
        <div className="heading_right">
          <p className="internship_link">view all trainings &#8594;</p>
        </div>
      </div>
      <div className="card_container">
        <div className="card">
          <img src={python} alt="city" className="city_img" />
          <p className="city_name">Programming with Python</p>
        </div>
        <div className="card">
          <img src={digimarketing} alt="city" className="city_img" />
          <p className="city_name">Digital Marketing</p>
        </div>
        <div className="card">
          <img src={webdev} alt="city" className="city_img" />
          <p className="city_name">Web Development</p>
        </div>
        <div className="card">
          <img src={ml} alt="city" className="city_img" />
          <p className="city_name">Machine Learning</p>
        </div>
        <div className="card">
          <img src={excel} alt="city" className="city_img" />
          <p className="city_name">Advanced Excel</p>
        </div>
        <div className="card">
          <img src={hack} alt="city" className="city_img" />
          <p className="city_name">Ethical Hacking</p>
        </div>
        <div className="card">
          <img src={autocad} alt="city" className="city_img" />
          <p className="city_name">AutoCAD</p>
        </div>
        <div className="card">
          <img src={writing} alt="city" className="city_img" />
          <p className="city_name">Creative Writing</p>
        </div>
      </div>
      <div className="more_container">
        <p className="more">& 52 more...</p>
      </div>
    </div>
  );
};

export default Training;
