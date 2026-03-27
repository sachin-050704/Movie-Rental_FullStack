import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from '../MovieDetail/CSS/MovieDetail.module.css'
import { Row, Col } from "react-bootstrap";
import Header from "../Global/Header/Header";
import Footer from "../Global/Footer/Footer";
import TvShowDetail1 from "./TvShowDetail1";
import TvShowDetail2 from "./TvShowDetail2";
import TvShowDetail3 from "./TvShowDetail3";
import TvShowDetail4 from "./TvShowDetail4";
import TvShowDetail6 from "./TvShowDetail6";
import TvShowDetail5 from "./TvShowDetail5";
import TvShowDetail7 from "./TvShowDetail7";





const TvShowDetail = () => {
    const { name } = useParams();
    console.log(name)

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/movies/wevList/")
            .then(res => res.json())
            .then(data => {
                let detail = data.find((movie) => movie.series_name == name);
                setMovies(detail)
                console.log(detail);
            })
            .catch(err => console.error(err))
    }, [name])

    console.log(movies)

    return (
        <>
            <Header />
            <TvShowDetail1 movies={movies} />
            <div className={classes.moviedetail}>
                <TvShowDetail2 movies={movies} />


                <Row>
                    <Col xl={8} lg={12}><div>
                        <TvShowDetail7 movies={movies} />
                        <TvShowDetail3 movies={movies} />
                        <TvShowDetail4 movies={movies} />
                        <TvShowDetail6 movies={movies} />
                        </div></Col>
                    <Col xl={4} lg={12}>
                    <div>
                        <TvShowDetail5 movies={movies}/>
                        </div></Col>
                </Row>
            </div>
            <Footer/>
        </>
    )
}

export default TvShowDetail;