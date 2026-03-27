import pic1 from '../../../assets/Images/movie5.png';
import pic from '../../../assets/Images/mov2.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import classes from '../../MovieListCat/MovieListCat.module.css';
import { FaCrown } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import StarRating from '../../Global/Star/StarRating';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const WatchList = () => {
    const [movies, setMovies] = useState([]);
    const [webseries, setWebseries] = useState([]); 
    const navigate = useNavigate();

    const fetchMovies = async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/movies/watchlist/", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access")
                }
            });

            const data = await res.json();

            setMovies(data.movies || []);
            setWebseries(data.webseries || []);

        } catch (err) {
            console.error(err);
        }
    };

    const handleRemove = async (type, id) => {
        try {
            const res = await fetch("http://127.0.0.1:8000/watchlist/remove/", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access")
                },
                body: JSON.stringify({ type, id })
            });

            const data = await res.json();

            if (data.status === "removed") {
                if (type === "movie") {
                    setMovies(prev => prev.filter(m => m.id !== id));
                } else {
                    setWebseries(prev => prev.filter(w => w.id !== id));
                }
            }

        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            <Header />

            <div style={{ backgroundColor: "#1A1A1A", padding: "50px 0", paddingTop: "120px" }}>

                {/* Title */}
                <div className='flex justify-center items-center' style={{ paddingBottom: "50px" }}>
                    <img src={pic1} alt="" />
                    <h1 className='text-white uppercase'>WatchList</h1>
                </div>

                <Container>
                    <Row>

                        {movies.map((item, index) => (
                            <Col key={`m-${index}`} lg={4} md={6} sm={12}>
                                <div
                                    className={classes.mov2box}
                                    onClick={() => navigate(`/movieDetail/${item.mov_name}`)}
                                >
                                    <div
                                        className={classes.mov2box1}
                                        style={{
                                            backgroundImage: `url(${item.mov_banner ? `${item.mov_banner}` : pic})`
                                        }}
                                    >
                                        <div className={classes.mov2p1}>
                                            <span
                                                className={classes.mov2c}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemove("movie", item.id);
                                                }}
                                                style={{ color: "gold", cursor: "pointer" }}
                                            >
                                                <FaCrown />
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex justify-between py-3'>
                                        <div>
                                            <h3 className='text-white'>{item.mov_name}</h3>
                                            <p style={{ color: "rgba(255,255,255,0.4)" }}>
                                                {item.mov_genre}
                                            </p>
                                        </div>
                                        <StarRating rating={item.mov_rating} />
                                    </div>
                                </div>
                            </Col>
                        ))}

                        {webseries.map((item, index) => (
                            <Col key={`w-${index}`} lg={4} md={6} sm={12}>
                                <div
                                    className={classes.mov2box}
                                    onClick={() => navigate(`/tvshowDetail/${item.series_name}`)}
                                >
                                    <div
                                        className={classes.mov2box1}
                                        style={{
                                            backgroundImage: `url(${item.series_banner ? `${item.series_banner}` : pic})`
                                        }}
                                    >
                                        <div className={classes.mov2p1}>
                                            <span
                                                className={classes.mov2c}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemove("webseries", item.id);
                                                }}
                                                style={{ color: "gold", cursor: "pointer" }}
                                            >
                                                <FaCrown />
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex justify-between py-3'>
                                        <div>
                                            <h3 className='text-white'>{item.series_name}</h3>
                                            <p style={{ color: "rgba(255,255,255,0.4)" }}>
                                                {item.series_genre}
                                            </p>
                                        </div>
                                        <StarRating rating={item.series_rating} />
                                    </div>
                                </div>
                            </Col>
                        ))}

                        {movies.length === 0 && webseries.length === 0 && (
                            <div className="text-center text-white w-100">
                                <h3>No items in your watchlist 🎬</h3>
                            </div>
                        )}

                    </Row>
                </Container>
            </div>

            <Footer />
        </>
    );
};

export default WatchList;