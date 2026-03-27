import classes from './CSS/Home1_5.module.css';
import pic1 from '../../assets/Images/home1_51.jpg';
import { MdArrowOutward } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import pic1 from '../../assets/Images/h21.png'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Btn2 from "../Global/Btn2/Btn2";
import { FaPlay } from "react-icons/fa";
import Line from '../Global/Purple line div/Line';




const Home1_5 = () => {
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

    return (
        <>
            <div className={classes.home1_5}>
                <div style={{ color: "white" }}>
                    <h1>Our Events</h1>
                </div>
                <span class={classes.side_text}>
                    OUR <br/> EVENTS
                </span>


                <div className="slider-container">
                    <Slider {...settings}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className={classes.slideWrap}>
                                <div>
                                    <div className={classes.home1_5box}>
                                        <img src={pic1} alt="" />
                                        <div className={classes.home1_5ext}>
                                            <div className={classes.btn1} data-cursor="grow">
                                                <button>Event US</button>
                                                <span><MdArrowOutward /></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-white py-3">
                                        <h3>The Opera House</h3>
                                        <div className="flex items-center">
                                            <span className='text-purple-700'><FaCalendarDays /></span>
                                            <p className='p-0 m-0 px-2' style={{ color: "rgba(255,255,255,0.7)" }}>August 3, 2025 — Toronto, ON</p>
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

export default Home1_5;

