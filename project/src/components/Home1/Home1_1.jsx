import pic1 from '../../assets/Images/home1_1.jpg';
import pic2 from '../../assets/Images/home1_1_1.png';
import classes from './CSS/Home1_1.module.css';
import { FaCalendarDays } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Btn1 from "../Global/Btn1/Btn1";
import Btn2 from "../Global/Btn2/Btn2";





const Home1_1 = () => {
    return (
        <>
            <div className={classes.home1_1} style={{ background: `url(${pic1})` }}>
                <div className={classes.home1_1_1}>
                    <p className={classes.home11p}>Music Band Fast</p>
                    <h1>Experience the Music. Live the Moment.</h1>
                    <p className={classes.h1p}>Step into our world—where every note tells a story and every performance becomes a memory. We’re not just a band; we’re a sonic journey, fusing passion, energy, and soul into every song.</p>
                    <div className={classes.h1icon}>
                        <FaCalendarDays style={{ color: "lightgreen" }} />
                        <p>25 april, 2025</p>
                        <p>|</p>
                        <FaCirclePlay style={{ color: "lightgreen" }} />
                        <p>24 ZI Pont Bouchet, 23200,  El Hadjar</p>
                    </div>
                    <div className={classes.home1_1btn}>
                        <Btn1 name={"Get Started"} icon={<MdArrowOutward />} style={{ width: "30%", padding: "10px 20px" }} />
                        <div className={`${classes.btn1}`}>
                            <button>Get Started</button>
                            <span><MdArrowOutward /></span>
                        </div>
                </div>
            </div>

            <div className={classes.home1_1_2}>
                <img src={pic2} alt="" srcset="" />
            </div>
        </div >
        </>
    )
}

export default Home1_1;