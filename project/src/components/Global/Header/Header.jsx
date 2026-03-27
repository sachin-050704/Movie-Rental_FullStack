import logo from '../../../assets/Images/logo1.png'
import classes from '../Header/Header.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';
import { RiShieldUserLine } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
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
import { LuLogOut } from "react-icons/lu";
import { useEffect, useState } from 'react';
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useNavigate } from 'react-router-dom';
import { ImCancelCircle } from "react-icons/im";



export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchbtn, setSearchBtn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/movies/")
      .then(res => res.json())
      .then(data => {
        let trend = data.map((movie) => movie.mov_name);
        let cat = data.map((movie) => movie.mov_genre);
        setMovies(trend)
        setGenre(cat)
        console.log(trend)
        console.log(cat)
      })
      .catch(err => console.error(err))
  }, [])

  const categories = [...new Set(genre.flatMap(item => item.split(',').map(cat => cat.trim())))];
  console.log(categories)

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    navigate("/login")
  }

  const handleSearchBtn = () => {
    setSearchBtn(true)
    const send = movies.find((mov) => mov == search)
    console.log(send)
    if (send) {
      navigate(`/movieDetail/${search}`)
    } else {
      console.log("wrong movie")
    }
  }

  const handleStopSearch = () => {
    setSearchBtn(false);
    setSearch("")
    setSuggestion([])
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value)

    if (search.length == 0) {
      setSuggestion([])
    }

    const data = movies.filter((mov) => mov.toLowerCase().includes(value.toLowerCase()))
    setSuggestion(data)
  }


  const handleSelect = (item) => {
    setSearch(item)
    setSuggestion([])
  }

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className={classes.header} style={{ backgroundColor: "transparent" }}>
          <div className={classes.head1}>
            <Link to={"/home"}><img src={logo} alt="" /></Link>
            <div className={classes.real1}>
              <button className={classes.headbtn}>ALL CATEGORIES</button>
              <div className={classes.btntext}>
                <h4>All Categories</h4>
                {categories.map((item, index) => (
                  <p className={classes.btntextp} key={index} onClick={() => navigate(`/movielistcat/${item}`)}>{item}</p>
                ))}
              </div>
            </div>
            <span className={classes.headicon}><IoIosArrowDown /></span>
          </div>
          <div className={classes.head2}>
            <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>Home</li>
              <div className={classes.litext}>
                <Link to={"/home"} className={classes.headlip} style={{ textDecoration: "none" }}><p>Home 1</p></Link>
                <Link to={"/home"} className={classes.headlip} style={{ textDecoration: "none" }}><p>Home 2</p></Link>
                <Link to={"/home"} className={classes.headlip} style={{ textDecoration: "none" }}><p>Home 3</p></Link>
              </div>
            </div>
            <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>Movies</li>
              <div className={classes.litext}>
                <Link to={"/movie"} className={classes.headlip} style={{ textDecoration: "none" }}><p>Movie</p></Link>
                <Link to={"/movie"} className={classes.headlip} style={{ textDecoration: "none" }}><p>Movie Details</p></Link>
              </div>
            </div>
            <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>TvShows</li>
              <div className={classes.litext}>
                <Link to={"/tvshow"} className={classes.headlip} style={{ textDecoration: "none" }}><p>TvShows</p></Link>
                <Link to={"/tvshow"} className={classes.headlip} style={{ textDecoration: "none" }}><p>TvShows Details</p></Link>
              </div>
            </div>
            <div className={classes.headli}>
              <Link to={'/watchlist'} style={{ textDecoration: "none", color: "white" }}><li style={{ cursor: "pointer" }}>Watch List</li></Link>
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
            {/* <div className={classes.headli}>
              <li style={{ cursor: "pointer" }}>Blogs</li>
              <div className={classes.litext}>
                <p>Blogs</p>
                <p>Blogs Details</p>
              </div>
            </div> */}
            <div><Link to={"/contact"} className={classes.headlip} style={{ textDecoration: "none", color: "white" }}><li style={{ cursor: "pointer" }}>Contact Us</li></Link></div>
          </div>
          <div className={classes.head3}>
            {searchbtn &&
              <div className={classes.headsearch}>
                <div className='flex'>
                  <input type="text" placeholder='Search Movies...' value={search} onChange={handleChange} />
                  <span onClick={handleStopSearch}><ImCancelCircle /></span>
                </div>
                <div className={classes.headsearchl}>
                  <ul className='p-0 m-0'>
                    {suggestion && (suggestion.map((item, index) => (
                      <li key={index} className='p-0 m-0' onClick={() => handleSelect(item)}>{item}</li>
                    )))}
                  </ul>
                </div>
              </div>
            }
            <span onClick={handleSearchBtn}><FaSearch /></span>
            <div className={classes.headbutton}>
              <div className={classes.btn1}>
                <button>SUSCRIBE</button>
                <span><IoDiamond /></span>
              </div>
              <Btn1 name={"SIGN IN"} icon={<FaUser />} />
            </div>
            <Link to={"/profile"} style={{ color: "white" }}>
              <span className={classes.bell}>
                <RiShieldUserLine />
              </span>
            </Link>
            <span onClick={() => setOpen(true)}><FaBars /></span>
            {/* <span onClick={handleLogout}><LuLogOut/></span> */}
          </div>
        </div>
      </header>
      
      
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] md:w-[380px] bg-black text-white z-50
        transform transition-transform duration-300 overflow-y-auto
        px-4 py-6 sm:px-6 sm:py-8
        ${open ? "translate-x-0" : "translate-x-full"} ${classes.aside1}`}
        style={{ borderLeft: "2px solid #8919B6" }}
      >
        <div className={classes.toghead}>
          <img src={logo} alt="" />
          <button onClick={() => setOpen(false)}><RxCross2 /></button>
        </div>

        <p className={classes.togpara}>
          Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
        </p>

        <div className={`${classes.togp2} max-h-[50vh] overflow-y-auto`}>
          <Menu>
            <SubMenu label="Categories" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              {categories.map((item, index) => (
                <MenuItem key={index} onClick={() => navigate(`/movielistcat/${item}`)} style={{ backgroundColor: "black", color: "white" }}>{item}</MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Home" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}><Link to={"/home"} style={{color:"white",textDecoration:"none"}}>Home 1</Link></MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}><Link to={"/home"} style={{color:"white",textDecoration:"none"}}>Home 2</Link></MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}><Link to={"/home"} style={{color:"white",textDecoration:"none"}}>Home 3</Link></MenuItem>
            </SubMenu>
            <SubMenu label="Movies" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}><Link to={"/movie"} style={{color:"white",textDecoration:"none"}}>Movie</Link></MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}><Link to={"/movie"} style={{color:"white",textDecoration:"none"}}>Movie Details</Link></MenuItem>
            </SubMenu>
            <SubMenu label="TvShows" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}><Link to={"/tvshow"} style={{color:"white",textDecoration:"none"}}>TvShow</Link></MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}><Link to={"/tvshow"} style={{color:"white",textDecoration:"none"}}>TvShow Details</Link></MenuItem>
            </SubMenu>
            <SubMenu label="Pages" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>About Us</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Artist</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Subscriptions</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Cooming Soon</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Log In</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Error 404</MenuItem>
            </SubMenu>
            {/* <SubMenu label="Blogs" suffix={<RxCross2 className={classes.dropdown} />} style={{ backgroundColor: "black", color: "white", padding: "0" }}>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Blog</MenuItem>
              <MenuItem style={{ backgroundColor: "black", color: "white" }}>Blog Details</MenuItem>
            </SubMenu> */}
            <MenuItem style={{ padding: "0", backgroundColor: "black", color: "white" }}><Link to={"/watchlist"} style={{color:"white",textDecoration:"none"}}>Watch List</Link></MenuItem>
            <MenuItem style={{ padding: "0", backgroundColor: "black", color: "white" }}> <Link to={"/contact"} style={{color:"white",textDecoration:"none"}}>Contact</Link></MenuItem>
          </Menu>
        </div>

        <div className={`${classes.togp1} mt-6`}>
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

          <Btn1
            name={"Suscribe"}
            style={{ width: "100%", borderRadius: "5px", fontWeight: "500", margin: "40px 0" }}
          />

          <div className={classes.togicon}>
            <div className={classes.togbox2}><span><FaFacebookF /></span></div>
            <div className={classes.togbox2} style={{ margin: "0 10px" }}><span><FaTwitter /></span></div>
            <div className={classes.togbox2}><span><FaYoutube /></span></div>
            <div className={classes.togbox2} style={{ margin: "0 10px" }}><span><FaLinkedinIn /></span></div>
          </div>

          <span
            className='flex items-center gap-1.5 py-4 text-xl'
            style={{ color: "red" }}
            onClick={handleLogout}
          >
            <LuLogOut /> Logout
          </span>
        </div>
      </aside>
    </>
  );
}
