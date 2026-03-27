import pic1 from '../../assets/Images/movie5.png';
import pic from '../../assets/Images/mov2.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './MovieListCat.module.css';
import { FaCrown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import StarRating from '../Global/Star/StarRating';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Global/Header/Header';
import Footer from '../Global/Footer/Footer';




const MovieListCat = () => {
    const { genre } = useParams();
    const [movies, setMovies] = useState([]);
    const [web, setWeb] = useState([]);
    const navigate = useNavigate();

    const fetchMovies = () => {
        fetch("http://127.0.0.1:8000/movies/")
            .then(res => res.json())
            .then(data => {
                let trend = data.filter((movie) => movie.mov_genre.includes(genre));
                setMovies(trend)
            })
            .catch(err => console.error(err))
    }

    const fetchWeb = () => {
        fetch("http://127.0.0.1:8000/movies/wevList/")
            .then(res => res.json())
            .then(data => {
                let trend = data.filter((movie) => movie.series_genre.includes(genre));
                setWeb(trend)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchMovies();
        fetchWeb();
    }, [genre])

    // console.log(movies)

    return (
        <>
            <Header />
            <div style={{ backgroundColor: "#1A1A1A", padding: "50px 0", paddingTop: "120px" }}>
                <div className='flex justify-center items-center' style={{ paddingBottom: "50px" }}>
                    <img src={pic1} alt="" />
                    <h1 className='text-white uppercase'>{genre} MOVIES</h1>
                </div>

                <div>
                    <Container>
                        <Row>
                            {movies && (
                                movies.map((item, index) => (
                                    <Col key={index} lg={4} md={6} sm={12}>
                                        <div className={classes.mov2box} onClick={() => navigate(`/movieDetail/${item.mov_name}`)}>
                                            <div className={classes.mov2box1} style={{ backgroundImage: `url(${item.mov_banner ? `http://127.0.0.1:8000${item.mov_banner}` : pic})` }}>
                                                <div className={classes.mov2p1}>
                                                    <span className={classes.mov2c}><FaCrown /></span>
                                                </div>
                                            </div>

                                            <div className='flex justify-between py-3'>
                                                <div>
                                                    <h3 className={`p-0 m-0 text-white`}>{item.mov_name}</h3>
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


                {web.length > 0 ? (
                    <>
                        <div className='flex justify-center items-center' style={{ paddingBottom: "50px" }}>
                            <img src={pic1} alt="" />
                            <h1 className='text-white uppercase'>{genre} Series</h1>
                        </div>

                        <div>
                            <Container>
                                <Row>
                                    {web.map((item, index) => (
                                        <Col key={index} lg={4} md={6} sm={12}>
                                            <div
                                                className={classes.mov2box}
                                                onClick={() => navigate(`/tvshowDetail/${item.series_name}`)}
                                            >
                                                <div
                                                    className={classes.mov2box1}
                                                    style={{
                                                        backgroundImage: `url(${item.series_banner
                                                            ? `http://127.0.0.1:8000${item.series_banner}`
                                                            : pic
                                                            })`
                                                    }}
                                                >
                                                    <div className={classes.mov2p1}>
                                                        <span className={classes.mov2c}><FaCrown /></span>
                                                    </div>
                                                </div>

                                                <div className='flex justify-between py-3'>
                                                    <div>
                                                        <h3 className='p-0 m-0 text-white'>{item.series_name}</h3>
                                                        <p className='p-0 m-0 text-[rgba(255,255,255,0.4)]'>
                                                            {item.series_genre}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <StarRating rating={item.series_rating} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    </>
                ) : null}
            </div>
            <Footer />
        </>
    )
}

export default MovieListCat;