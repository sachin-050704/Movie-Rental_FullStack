import React from "react";
import classes from "./Footer1.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import logo from "../../../assets/Images/logo.svg";

const Footer1 = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          
          {/* LEFT SECTION */}
          <div className={classes.footerLeft}>
            <img src={logo} alt="Company Logo" className={classes.logo} />
            <p className={classes.connectText}>
              Our logo represents more than just a name — it's a symbol of our passion, energy, and journey through music.
            </p>

            <div className={classes.socialIcons}>
              <span><FaTiktok /></span>
              <span><FaFacebookF /></span>
              <span><FaYoutube /></span>
              <span><FaTwitter /></span>
              <span><FaInstagram /></span>
            </div>
          </div>

          {/* COMPANY */}
          <div className={classes.footerColumn}>
            <h3>Company</h3>
            <ul>
              <li><span className="text-3xl self-auto">»</span> Movie</li>
              <li><span className="text-3xl self-auto">»</span> TV Shows</li>
              <li><span className="text-3xl self-auto">»</span> Pricing Plan</li>
              <li><span className="text-3xl self-auto">»</span> Web Series</li>
              <li><span className="text-3xl self-auto">»</span> Top Trending</li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div className={classes.footerColumn}>
            <h3>Explore</h3>
            <ul>
              <li><span className="text-3xl self-auto">»</span> Home</li>
              <li><span className="text-3xl self-auto">»</span> Video</li>
              <li><span className="text-3xl self-auto">»</span> Buy Plan</li>
              <li><span className="text-3xl self-auto">»</span> Subscriptions</li>
              <li><span className="text-3xl self-auto">»</span> Log In</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className={classes.footerContact}>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <span><MdLocationOn /></span>
                UK, 1212; 102/B New Elephant Road London
              </li>
              <li>
                <span><IoTimeSharp /></span>
                example@gmail.com
              </li>
              <li>
                <span><FaPhoneAlt /></span>
                +89 09 2346 1894
              </li>
            </ul>
          </div>

        </div>
      </footer>

      {/* Bottom Bar */}
      <div className={classes.bottomBar}>
        © 2026 Company.com — All Rights Reserved
      </div>
    </>
  );
};

export default Footer1;