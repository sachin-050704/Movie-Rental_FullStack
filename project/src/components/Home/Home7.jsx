import Line from "../Global/Purple line div/Line";
import classes from '../Home/CSS/Home7.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from '../../assets/Images/h71.png'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



const Home7 = () => {
    const NextArrow = ({ onClick }) => (
        <div className={classes.nextArrow} onClick={onClick}><FaAngleRight/></div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className={classes.prevArrow} onClick={onClick}><FaAngleLeft/></div>
    );


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 900,
        pauseOnHover: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
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
            <div className={classes.line1} style={{ backgroundColor: "black" }}>
                <Line temp={"Our Client Feedback"} />
            </div>

            <div className={classes.home7}>
                <div className="slider-container">
                    <Slider {...settings}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className={classes.slideWrap}>
                                <div className={classes.card}>
                                    <div className={classes.stars}>
                                        ★ ★ ★ ★ ☆
                                    </div>
                                    <p>
                                        Consectetur adipiscing elit. Integer nunc viverra laoreet est
                                        the is porta pretium metus aliquam eget maecenas porta is nunc
                                        viverra Aenean pulvinar maximus leo quia voluptas sit.
                                    </p>
                                    <div className={classes.user}>
                                        <img src={pic1} alt="" />
                                        <div>
                                            <h4>Jenny Wilson</h4>
                                            <span>Binford Ltd.</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default Home7;