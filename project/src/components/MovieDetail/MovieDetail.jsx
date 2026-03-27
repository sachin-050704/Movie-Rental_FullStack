import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Global/Header/Header";
import MovieDetail1 from "./MovieDeatil1";
import MovieDetail2 from "./MovieDetail2";
import MovieDetail3 from "./MovieDetail3";
import classes from './CSS/MovieDetail.module.css'
import MovieDeatil4 from "./MovieDetail4";
import MovieDetail5 from "./MovieDetail5";
import { Row, Col } from "react-bootstrap";
import Footer from "../Global/Footer/Footer";
import MovieDeatil6 from "./MovieDetail6";





const MovieDetail = () => {
    const { name } = useParams();
    console.log(name)

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/movies/")
            .then(res => res.json())
            .then(data => {
                let detail = data.find((movie) => movie.mov_name == name);
                setMovies(detail)
                console.log(detail);
            })
            .catch(err => console.error(err))
    }, [name])

    console.log(movies)
    console.log(movies.rentals)

    return (
        <>
            <Header />
            <MovieDetail1 movies={movies} />
            <div className={classes.moviedetail}>
                <MovieDetail2 movies={movies} />


                <Row>
                    <Col xl={8} lg={12}><div>
                        <MovieDetail3 movies={movies} />
                        <MovieDeatil4 movies={movies} />
                        <MovieDeatil6 movies={movies} />
                        </div></Col>
                    <Col xl={4} lg={12}>
                    <div>
                        <MovieDetail5 movies={movies}/>
                        </div></Col>
                </Row>
            </div>
            <Footer/>
        </>
    )
}

export default MovieDetail;