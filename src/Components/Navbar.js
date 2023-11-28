import { Link } from "gatsby";
import React from "react";
import logo from "../images/logos/Logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-box">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <Link to="/career">Career</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/fees">Fees</Link>
          <div className="button-box">
            <button className="common-btn">TRADE NOW</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
