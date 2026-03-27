import Line from "../Global/Purple line div/Line";
import classes from './CSS/MovieDetail4.module.css';
import pic from '../../assets/Images/mov2.jpg';
import Btn2 from "../Global/Btn2/Btn2";
import { FaPlay } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from '../../assets/Images/h21.png'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../Global/Star/StarRating";



const MovieDeatil4 = ({ movies }) => {
    const [cast, setCast] = useState([]);
    const navigate = useNavigate();

    const NextArrow = ({ onClick }) => (
        <div className={classes.nextArrow} onClick={onClick}><FaAngleRight /></div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className={classes.prevArrow} onClick={onClick}><FaAngleLeft /></div>
    );


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        speed: 1100,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const { casts, crews } = movies;

    const actor1 = casts?.map((act) => act.actor.act_name)

    // const main = [...actor,...character]

    console.log(actor1)

    // const handleSend = () =>{}

    return (
        <>
            <div className={classes.movdetail2}>
                <div className={classes.movdet2}>
                    <h1>Casts</h1>
                </div>


                <div className="slider-container">
                    <Slider {...settings}>
                        {casts?.map((item, index) => (
                            <div className={classes.slideWrap}>
                                <div className={classes.movdett}>
                                    <div className={classes.movdet3}>
                                        <img src={`http://127.0.0.1:8000${item.actor.act_image}`} alt="" />
                                    </div>

                                    <div className={classes.movdet4}>
                                        <div>
                                            <h6 className='p-0 m-0 text-white'>{item.actor.act_name}</h6>
                                            <p className='p-0 m-0' style={{ color: "rgba(255,255,255,0.4)", fontSize:"14px" }}>
                                                {item.character.cat_name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default MovieDeatil4;