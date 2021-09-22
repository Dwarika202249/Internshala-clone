import React from "react";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <div className="footer_container">
      <div className="all_col_container">
        <div className="col_container">
          <p className="col_heading">Internships by places</p>
          <ul className="col_list">
            <li className="col_item">Internship in India</li>
            <li className="col_item">Internship in Delhi</li>
            <li className="col_item">Internship in Bangalore</li>
            <li className="col_item">Internship in Hyderabad</li>
            <li className="col_item">Internship in Mumbai</li>
            <li className="col_item">Internship in Chennai</li>
            <li className="col_item">Internship in Gurgaon</li>
            <li className="col_item">Internship in Kolkata</li>
            <li className="col_item">Internship in Virtual internship</li>
          </ul>
        </div>
        <div className="col_container">
          <p className="col_heading">Internship by Stream</p>
          <ul className="col_list">
            <li className="col_item">Computer Science Internship</li>
            <li className="col_item">Electronics Internship</li>
            <li className="col_item">Mechanical Internship</li>
            <li className="col_item">Civil Internship</li>
            <li className="col_item">Marketing Internship</li>
            <li className="col_item">Chemical Internship</li>
            <li className="col_item">Finance Internship</li>
            <li className="col_item">Summer Research Fellowship</li>
            <li className="col_item">Campus Ambassador Program</li>
          </ul>
        </div>
        <div className="col_container">
          <div className="col_head_container">
            <p className="col_heading">Online Trainings</p>
            <button className="offerbtn">OFFER</button>
          </div>
          <ul className="col_list">
            <li className="col_item">Programming with Python</li>
            <li className="col_item">Digital Marketing</li>
            <li className="col_item">Web Development</li>
            <li className="col_item">Machine Learning</li>
            <li className="col_item">Advanced Excel</li>
            <li className="col_item">Ethical Hacking</li>
            <li className="col_item">AutoCAD</li>
            <li className="col_item">Creative Writing</li>
            <li className="col_item">Data Science</li>
          </ul>
        </div>
        <div className="col_container">
          <p className="col_heading">About Internshala</p>
          <ul className="col_list">
            <li className="col_item">About us</li>
            <li className="col_item">We're hiring</li>
            <li className="col_item">Hire interns for your company</li>
            <li className="col_item">Team Diary</li>
            <li className="col_item">Blog</li>
            <li className="col_item">Our Services</li>
            <li className="col_item">Terms & Conditions</li>
            <li className="col_item">Privacy</li>
            <li className="col_item">Contact us</li>
          </ul>
        </div>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="lower_footer">
        <div className="left_lower">
          <button className="get_app">
            <PlayCircleOutlineIcon className="play_store_btn" /> Get Android App
          </button>
          <div className="socialmedia_container">
            <InstagramIcon className="socialbtn" />
            <TwitterIcon className="socialbtn" />
            <YouTubeIcon className="socialbtn" />
            <LinkedInIcon className="socialbtn" />
          </div>
        </div>
        <div className="right_lower">
          © Copyright {getCurrentYear} Internshala
        </div>
      </div>
    </div>
  );
};

export default Footer;
