// import React from "react";
import classes from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaTiktok,
    FaPaperPlane,
} from "react-icons/fa";
import logo from '../../../assets/Images/logo.svg'
import Btn1 from "../Btn1/Btn1";

const Footer = () => {
    return (
        <>
            <div className={classes.footer}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[3fr_2.3fr_2.3fr_4fr] lg:grid-cols-[4fr_4fr_4fr] gap-8">
                    <div>
                        <div className={classes.footerLeft}>
                            <img src={logo} alt="" srcset="" />
                            <p className={classes.connect}>Connected With Us!</p>

                            <div className={classes.socialIcons}>
                                <span><FaTiktok /></span>
                                <span><FaFacebookF /></span>
                                <span><FaYoutube /></span>
                                <span><FaTwitter /></span>
                                <span><FaInstagram /></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={classes.footerColumn}>
                            <h3>Company</h3>
                            <ul>
                                <li><span>»</span> Movie</li>
                                <li><span>»</span> TV Shows</li>
                                <li><span>»</span> Pricing Plan</li>
                                <li><span>»</span> Web Series</li>
                                <li><span>»</span> Top Trending</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={classes.footerColumn}>
                            <h3>Explore</h3>
                            <ul>
                                <li><span>»</span> Home</li>
                                <li><span>»</span> Video</li>
                                <li><span>»</span> Buy Plan</li>
                                <li><span>»</span> Subscriptions</li>
                                <li><span>»</span> Log In</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={classes.footerNewsletter}>
                            <h3>Newsletter</h3>
                            <p>
                                Subscribe To Our Newsletter And Never Miss Our Latest Movie,
                                Web Series, TV Show Etc.
                            </p>

                            <div className={classes.newsletterBox} style={{display:"flex", alignItems:"center"}}>
                                <input type="email" placeholder="Email Address" />
                                {/* <button>
                                    <FaPaperPlane />
                                </button> */}
                                <Btn1 icon={<FaPaperPlane />} style={{width:"40px",height:"40px",borderRadius:"50%"}}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={classes.footer1}>
                <p>© Copyright 2025 Company.com</p>
            </div>
        </>
    );
};

export default Footer;
