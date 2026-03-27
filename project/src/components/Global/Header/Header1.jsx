import logo from '../../../assets/Images/logo1.png'
import classes from '../Header/Header1.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';
import { GoDotFill } from "react-icons/go";
import { IoDiamond } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Btn1 from '../Btn1/Btn1';
import { LuMapPin } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from 'react';
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useNavigate } from 'react-router-dom';



export default function Header1() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div className={classes.header} style={{ backgroundColor: "transparent" }}>
          <div className={classes.head1}>
            <img src={logo} alt="" />
          </div>
          <div className={classes.head2}>
            <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>Home</li>
              <div className={classes.litext}>
                <Link to={"/home1"} className={classes.headlip} style={{textDecoration:"none"}}><p>Home 1</p></Link>
                <Link to={"/home3"} className={classes.headlip} style={{textDecoration:"none"}}><p>Home 2</p></Link>
                <Link to={"/home3"} className={classes.headlip} style={{textDecoration:"none"}}><p>Home 3</p></Link>
                <Link to={"/home3"} className={classes.headlip} style={{textDecoration:"none"}}><p>Home 4</p></Link>
              </div>
            </div>
            <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>Movies</li>
              <div className={classes.litext}>
                <Link to={"/movie"} className={classes.headlip} style={{textDecoration:"none"}}><p>Movie</p></Link>
                <p>Movie Details</p>
              </div>
            </div>
            <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>TvShows</li>
              <div className={classes.litext}>
                <p>TvShows</p>
                <p>TvShows Details</p>
              </div>
            </div>
            <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>Web Series</li>
              <div className={classes.litext}>
                <p>Web Series</p>
                <p>Web Series Details</p>
              </div>
            </div>
            <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>Pages</li>
              <div className={classes.litext}>
                <p>About Us</p>
                <p>Artist</p>
                <p>Subscriptions</p>
                <p>Coming Soon</p>
                <p>Log In</p>
                <p>Error 404</p>
              </div>
            </div>
            <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>Blogs</li>
              <div className={classes.litext}>
                <p>Blogs</p>
                <p>Blogs Details</p>
              </div>
            </div>
            <div><li style={{ cursor: "pointer" }}>Contact Us</li></div>
          </div>
          <div className={classes.head3}>
            <span><FaSearch /></span>
            {/* <div className={classes.headbutton}>
              <div className={classes.btn1}>
                <button>SUSCRIBE</button>
                <span><IoDiamond /></span>
              </div>
              <Btn1 name={"SIGN IN"} icon={<FaUser />} />
            </div>
            <span className={classes.bell}>
              <GoBell />
              <div className={classes.belldot}><GoDotFill /></div>
            </span> */}
            <div className={classes.btnn1} onClick={()=>navigate("/register")}><Btn1 name={"Get Started"} icon={<MdArrowOutward/>}/></div>
            <span className={classes.btnn2} onClick={() => setOpen(true)}><FaBars /></span>
          </div>
        </div>
      </header>


      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      />


      <aside
        className={`fixed top-0 right-0 h-full w-[380px] bg-black text-white z-50
        transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{padding:"30px 20px",borderLeft:"2px solid #8919B6"}}
      >
        <div className={classes.toghead}>
          <img src={logo} alt="" />
          <button onClick={() => setOpen(false)}><RxCross2 /></button>
        </div>
        <p className={classes.togpara}>Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.</p>

        <div className={classes.togp2}>
          <Menu>
            <SubMenu label="Home" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 1</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 2</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 3</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 4</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Home 5</MenuItem>
            </SubMenu>
            <SubMenu label="Movies" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Movie</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Movie Details</MenuItem>
            </SubMenu>
            <SubMenu label="TvShows" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>TvShows</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>TvShows Details</MenuItem>
            </SubMenu>
            <SubMenu label="Web Series" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Web Series</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Web Series Details</MenuItem>
            </SubMenu>
            <SubMenu label="Pages" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>About Us</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Artist</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Subscriptions</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Cooming Soon</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Log In</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Error 404</MenuItem>
            </SubMenu>
            <SubMenu label="Blogs" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Blog</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Blog Details</MenuItem>
            </SubMenu>
            <MenuItem style={{ padding: "0", backgroundColor: "black", color: "white" }}> Contact</MenuItem>
          </Menu>
        </div>

        <div className={classes.togp1}>
          <p className={classes.togcon} style={{ fontSize: "20px" }}>Contact Info</p>
          <div className={classes.togbox1}>
            <span><LuMapPin /></span>
            <p>Main Street, Melbourne, Australia</p>
          </div>
          <div className={classes.togbox1}>
            <span><FaRegEnvelope /></span>
            <p>info@example.com</p>
          </div>
          <div className={classes.togbox1}>
            <span><FaRegClock /></span>
            <p>Mod-friday, 09am -05pm</p>
          </div>
          <div className={classes.togbox1}>
            <span><MdOutlineLocalPhone /></span>
            <p>+11002345909</p>
          </div>
          <Btn1 name={"Suscribe"} style={{ width: "100%", borderRadius: "5px", fontWeight: "500", margin: "40px 0" }} />
          <div className={classes.togicon}>
            <div className={classes.togbox2}>
              <span><FaFacebookF /></span>
            </div>
            <div className={classes.togbox2} style={{ margin: "0 10px" }}>
              <span><FaTwitter /></span>
            </div>
            <div className={classes.togbox2}>
              <span><FaYoutube /></span>
            </div>
            <div className={classes.togbox2} style={{ margin: "0 10px" }}>
              <span><FaLinkedinIn /></span>
            </div>
          </div>
        </div>
    </aside >
    </>
  );
}
