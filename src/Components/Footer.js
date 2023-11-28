import React from 'react';
import density_logo2 from "../images/logos/density_logo2.png";
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-logo'>
            <img src={density_logo2} alt="logo" />
        </div>
        <div className="other-links">
          <Link to='/blog'>Blog</Link>
          <Link to='/fees'>Fees</Link>
          <Link to='/leaderboard'>Leaderboard</Link>
          <Link to='/career'>Careers</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/privacy'>Privacy Policy</Link>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum labore earum consequatur dicta fugit at harum inventore fugiat error ea.</p>
        <div className='social-links'>

        </div>
    </footer>
  )
}

export default Footer