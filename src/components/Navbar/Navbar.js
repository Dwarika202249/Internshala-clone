import "./navbar.css";
import logo from "../../images/logo.PNG";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="left_navbar">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="right_navbar">
          <ul className="navbar_menu">
            <li className="navbar_item">Internships</li>
            <li className="navbar_item col_head_container">
              <p className="online">Online Trainings</p>
              <button className="offer">OFFER</button>
            </li>
            <li className="navbar_item">Fresher Jobs</li>
          </ul>
          <div className="btn_container">
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
