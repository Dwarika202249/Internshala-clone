import React from "react";
import "./fresher.css";
import minctc from "../../images/Freshers/minctc.PNG";
import dreamcompany from "../../images/Freshers/dreamcompany.PNG";
import verified from "../../images/Freshers/verified.PNG";

const Fresher = () => {
  return (
    <div className="internship_container">
      <div className="heading_container">
        <div className="heading_left">
          <div className="fresher_heading_container">
            <h1 className="internship_heading fresher_heading">Fresher Jobs</h1>
            <button className="newbtn">New</button>
          </div>
          <p className="small_heading">
            Premium fresher jobs on your fingertips
          </p>
        </div>
        <div className="heading_right">
          <p className="internship_link">view all jobs &#8594;</p>
        </div>
      </div>
      <div className="training_card_container">
        <div className="cards">
          <img src={minctc} alt="minctc" className="city_img" />
          <p className="city_name">Minimum CTC of 3 LPA</p>
        </div>
        <div className="cards">
          <img src={dreamcompany} alt="dream_comapny" className="city_img" />
          <p className="city_name">Dream companies</p>
        </div>
        <div className="cards">
          <img src={verified} alt="verified" className="city_img" />
          <p className="city_name">100% verified jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Fresher;
