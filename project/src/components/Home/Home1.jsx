import classes from '../Home/CSS/Home1.module.css'
import pic1 from '../../assets/Images/home1.jpg'
import pic2 from '../../assets/Images/home2.jpg'
import pic3 from '../../assets/Images/home3.jpg'
import { MdLocalMovies } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from 'react';


const Home1 = () => {
    const images = [pic1, pic2, pic3];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false); 
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setAnimate(true);
            }, 100);

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={classes.home1} style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${images[currentIndex]})` }}>
                <div className={`${classes.textContent} ${animate ? classes.animate : ""}`}>
                <h1>The Pale Door</h1>
                <div className={classes.h1icon}>
                    <MdLocalMovies />
                    <p>Action</p>
                    <FaCalendarDays />
                    <p>2025</p>
                    <FaCirclePlay />
                    <p>2 h 20 min</p>
                    <div className={classes.k8}>8k</div>
                </div>
                <p className={classes.h1p}>In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after</p>
                <div className={classes.btn1} data-cursor="grow">
                    <button>SUSCRIBE</button>
                    <span><FaPlay /></span>
                </div>
                </div>
            </div>
        </>
    )
}

export default Home1;