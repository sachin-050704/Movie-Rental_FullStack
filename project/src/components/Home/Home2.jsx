import Line from "../Global/Purple line div/Line";
import classes from '../Home/CSS/Home2.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from '../../assets/Images/h21.png'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Btn2 from "../Global/Btn2/Btn2";
import { FaPlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";



const Home2 = () => {
    const [showPage, setShowPage] = useState(false);

    const NextArrow = ({ onClick }) => (
        <div className={classes.nextArrow} onClick={onClick}><FaAngleRight /></div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className={classes.prevArrow} onClick={onClick}><FaAngleLeft /></div>
    );


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        speed: 1100,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 4 }
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
            <div className={classes.home2}>
                <div className={classes.line1} style={{ backgroundColor: "black" }}>
                    <Line temp={"Adventure"} />
                </div>


                <div className="slider-container">
                    <Slider {...settings}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className={classes.slideWrap}>
                                <div className={classes.h2box}>
                                    <div className={classes.h2img}>
                                        <img src={pic1} alt="" srcset="" />
                                    </div>
                                    <div className={classes.h2p}>
                                        <p>1482 Views</p>
                                        <p style={{ paddingLeft: "15px" }}>4 years ago</p>
                                    </div>
                                    <h3>Anything for Jackson</h3>
                                    <div className={classes.h2hover}>
                                        <Btn2 icon={<FaPlay />} style={{ width: "50px", height: "50px", borderRadius: "50%" }} onClick={() => setShowPage(true)} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
            {showPage && (
                <div className={classes.fulloverlay}>
                    <div className={classes.content}>
                        <div className="text-right">
                            <button onClick={() => setShowPage(false)} style={{ fontSize: "25px", color: "white" }}><RxCross2 /></button>
                        </div>
                        <div className={classes.content1}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/eNvUS-6PTbs?si=Z79ARJXzBSUu7w9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>


                    </div>
                </div>
            )}
        </>
    )
}

export default Home2;