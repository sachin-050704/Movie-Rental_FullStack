import Line from "../Global/Purple line div/Line";
import classes from './Review.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from '../../assets/Images/h71.png'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import StarRating from "../Global/Star/StarRating";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";



const TvShowReview = ({ id }) => {
    const [review, setReview] = useState([]);
    const [open, setOpen] = useState(false);
    const [review_rating, setRating] = useState("");
    const [review_name, setName] = useState("");
    const [review_msg, setMessage] = useState("");
    const [name, setMovName] = useState("");
    const navigate = useNavigate();

    const fetchReviews = () => {
        fetch("http://127.0.0.1:8000/movies/wevList/")
            .then(res => res.json())
            .then(data => {
                const trend = data.find(movie => movie.id == id);
                setReview(trend?.reviews || []);
                setMovName(trend.series_name);
                console.log(trend.reviews);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchReviews();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("webseries", id);
        formData.append("review_name", review_name);
        formData.append("review_msg", review_msg);
        formData.append("review_rating", review_rating);

        try {
            const res = await axios.post("http://127.0.0.1:8000/movies/add_web_review/", formData);
            console.log(res.data);
            setOpen(false);
            setName("");
            setMessage("");
            setRating("");
            fetchReviews();
        } catch (error) {
            console.log(error);
        }
    };


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
            <div className={classes.movdetail2}>
                <div className={classes.movdet2}>
                    <h1>Reviews</h1>
                </div>


                <div className="slider-container">
                    {review?.length > 0 ? (
                        <Slider {...settings}>
                            {review.map((item, index) => (
                                <div key={item.id || index} className={classes.slideWrap}>
                                    <div className={classes.card}>
                                        <div className={classes.stars}>
                                            <StarRating rating={item.review_rating} />
                                        </div>

                                        <p className={`h-32 overflow-y-auto ${classes.customScroll}`}>
                                            {item.review_msg}
                                        </p>

                                        <div className={classes.user}>
                                            <div>
                                                <h4>{item.review_name}</h4>
                                                <span style={{ fontSize: "10px" }}>
                                                    {item.review_created_at}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p style={{ textAlign: "center" }}>No reviews yet</p>
                    )}
                </div>
                <div className={classes.addrev}>
                    <button className={classes.adrev} onClick={() => setOpen(true)}>Add Review</button>
                </div>
                {open && (
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="w-full h-full max-w-md backdrop-blur-xl bg-white/10  p-8 rounded-2xl shadow-2xl space-y-6"
                            style={{ width: "50%", height: "50%", overflow: "hidden", padding: "20px", justifySelf: "center" }}
                        >
                            <div onClick={()=> setOpen(false)} style={{justifySelf:"flex-end",fontSize:"15px",cursor:"pointer"}}><RxCross2/></div>
                            <h2 className="text-2xl font-bold text-center text-white tracking-wide">
                                ✨ Share Your Experience
                            </h2>

                            <div className="relative">
                                <input
                                    value={review_name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    required
                                    className="w-full p-2 bg-transparent border-b border-gray-400 focus:border-purple-400 outline-none py-2 text-white peer"
                                    placeholder="Name"
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    value={review_msg}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="3"
                                    required
                                    className="w-full p-2 bg-transparent border-b border-gray-400 focus:border-purple-400 outline-none py-2 text-white peer resize-none"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <div className="relative">
                                <input
                                    value={review_rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    type="number"
                                    required
                                    className="w-full p-2 bg-transparent border-b border-gray-400 focus:border-purple-400 outline-none py-2 text-white peer"
                                    placeholder="Rating"
                                />
                            </div>

                            <div className="w-50 m-auto pt-3 rounded-2xl overflow-hidden text-white">
                                <button
                                    type="submit"
                                    className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform font-semibold shadow-lg"
                                >
                                    Submit Review
                                </button>
                            </div>

                        </form>
                    </div>
                )}
            </div>
        </>
    )
}

export default TvShowReview;