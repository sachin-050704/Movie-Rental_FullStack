import pic1 from '../../assets/Images/movie5.png';
import pic from '../../assets/Images/mov2.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './CSS/Movie5.module.css';
import { FaCrown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import StarRating from '../Global/Star/StarRating';
import { useNavigate } from 'react-router-dom';




const Movie5 = () => {
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/movies/")
            .then(res => res.json())
            .then(data => {
                let trend = data.filter((movie) => movie.mov_rating >= 9);
                setMovies(trend)
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
            <div style={{ backgroundColor: "#1A1A1A", padding: "50px 0" }}>
                <div className='flex justify-center items-center' style={{ paddingBottom: "50px" }}>
                    <img src={pic1} alt="" />
                    <h1 className='text-white'>POPULAR MOVIES</h1>
                </div>

                <div>
                    <Container>
                        <Row>
                            {movies && (
                                movies.map((item, index) => (
                                    <Col key={index} lg={4} md={6} sm={12}>
                                        <div className={classes.mov2box}>
                                            <div className={classes.mov2box1} style={{ backgroundImage: `url(${item.mov_banner ? `http://127.0.0.1:8000${item.mov_banner}` : pic})` }}>
                                                <div className={classes.mov2p1}>
                                                    <span onClick={() => handleSave("movie",item.id)} className={classes.mov2c} style={{ color: isSaved(item.id) ? "gold" : "white", cursor: "pointer", transition: "0.3s" }}><FaCrown /></span>
                                                </div>
                                            </div>

                                            <div className='flex justify-between py-3'>
                                                <div>
                                                    <h3 className='p-0 m-0 text-white' onClick={() => navigate(`/movieDetail/${item.mov_name}`)}>{item.mov_name}</h3>
                                                    <p className='p-0 m-0' style={{ color: "rgba(255,255,255,0.4)" }}>{item.mov_genre}</p>
                                                </div>
                                                <div><StarRating rating={item.mov_rating} /></div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            )}
                        </Row>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default Movie5;