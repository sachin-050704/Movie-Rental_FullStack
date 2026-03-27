import Line from "../Global/Purple line div/Line";
import classes from '../Movie/CSS/Movie2.module.css';
import pic from '../../assets/Images/mov2.jpg';
import Btn2 from "../Global/Btn2/Btn2";
import { FaPlay } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RxCross2 } from "react-icons/rx";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../Global/Star/StarRating";
import TvShow from "./TvShow";



const TvShow4 = () => {
    const [movies, setMovies] = useState([]);
    const [showPage, setShowPage] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
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

    useEffect(() => {
        fetch("http://127.0.0.1:8000/movies/wevList/")
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                console.log(data)
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/movies/watchlist/", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access")
            }
        })
            .then(res => res.json())
            .then(data => {
                const ids = data.map(movie => movie.id);
                setSavedMovies(ids);
            })
            .catch(err => console.error(err));
    }, []);


    const handleSave = async (type,movieId) => {
        try {
            const res = await fetch("http://127.0.0.1:8000/movies/toggle/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access")
                },
                body: JSON.stringify({
                    type: type,
                    id: movieId
                })
            });

            const data = await res.json();

            if (data.status === "added") {
                setSavedMovies(prev => [...prev, movieId]);
            } else {
                setSavedMovies(prev => prev.filter(id => id !== movieId));
            }

        } catch (err) {
            console.error(err);
        }
    };

    const isSaved = (movieId) => savedMovies.includes(movieId);


    return (
        <>
            <div className={classes.movie2}>
                <div className={classes.line1} style={{ backgroundColor: "black", padding: "40px 0" }}>
                    <Line temp={"Tv Shows"} />
                </div>


                <div className="slider-container">
                    <Slider {...settings}>
                        {movies.map((item, index) => (
                            <div key={index} className={classes.slideWrap}>
                                <div className={classes.mov2box}>
                                    <div className={classes.mov2box1} style={{ backgroundImage: `url(${item.series_banner ? `http://127.0.0.1:8000/${item.series_banner}` : pic})` }}>
                                        <div className={classes.mov2p}>
                                            <Btn2 icon={<FaPlay />} style={{ width: "50px", height: "50px", borderRadius: "50%" }} onClick={() => setShowPage(true)} />


                                        </div>

                                        <div className={classes.mov2p1}>
                                            <span onClick={() => handleSave("webseries",item.id)} className={classes.mov2c} style={{ color: isSaved(item.id) ? "gold" : "white", cursor: "pointer", transition: "0.3s" }}><FaCrown /></span>
                                        </div>
                                    </div>

                                    <div className='flex justify-between py-3'>
                                        <div>
                                            <h3 className={classes.mov2h3} onClick={() => { navigate(`/tvshowDetail/${item.series_name}`) }}>{item.series_name}</h3>
                                            <p className='p-0 m-0' style={{ color: "rgba(255,255,255,0.4)" }}>{item.series_genre
                                            }</p>
                                        </div>
                                        <div><StarRating rating={item.series_rating} /></div>
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

export default TvShow4;