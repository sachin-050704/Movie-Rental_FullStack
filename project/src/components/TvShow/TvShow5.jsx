import Line from "../Global/Purple line div/Line";
import classes from '../Movie/CSS/Movie2.module.css';
import pic from '../../assets/Images/mov4.jpg';
import Btn2 from "../Global/Btn2/Btn2";
import { FaPlay } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



const TvShow5 = () => {
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
            <div className={classes.movie2}>
                <div className={classes.line1} style={{ backgroundColor: "black",padding:"40px 0" }}>
                    <Line temp={"MOST LIKED"} />
                </div>


                <div className="slider-container">
                    <Slider {...settings}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className={classes.slideWrap}>
                                <div className={classes.mov2box}>
                                    <div className={classes.mov2box1} style={{ backgroundImage: `url(${pic})` }}>
                                        <div className={classes.mov2p}>
                                            <Btn2 icon={<FaPlay />} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                                        </div>

                                        <div className={classes.mov2p1}>
                                            <span className={classes.mov2c}><FaCrown /></span>
                                        </div>
                                    </div>

                                    <div className='flex justify-between py-3'>
                                        <div>
                                            <h3 className='p-0 m-0 text-white'>Windatalkers</h3>
                                            <p className='p-0 m-0' style={{ color: "rgba(255,255,255,0.4)" }}>Action,war,romantic</p>
                                        </div>
                                        <div className='flex gap-0.5'>
                                            <span style={{ color: "#F5C518" }}><FaStar /></span>
                                            <span style={{ color: "#F5C518" }}><FaStar /></span>
                                            <span style={{ color: "#F5C518" }}><FaStar /></span>
                                            <span style={{ color: "#7A7976" }}><FaStar /></span>
                                            <span style={{ color: "#7A7976" }}><FaStar /></span>
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

export default TvShow5;