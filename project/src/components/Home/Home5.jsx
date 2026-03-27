import classes from '../Home/CSS/Home5.module.css'
import { Container } from 'react-bootstrap';
import pic from '../../assets/Images/h5img.jpg';
import { FaPlay } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";




const Home5 = () => {
    return (
        <>
            <div className={classes.home5}>
                <Container className={classes.h5con}>
                    <div className={classes.h5img} style={{
                        background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${pic})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}>
                        <div className={classes.content}>
                            <div className="contain1">
                                <h1>Stories Of The Dark</h1>

                                <div className={classes.meta}>
                                    <span className={classes.rating}>
                                        <FaStar /> 9.2
                                    </span>
                                    <span>2025</span>
                                    <span>2 hour 45 min</span>
                                    <span className={classes.tag}>TV-GO</span>
                                </div>

                                <p>
                                    Transmds is the world's driving worldwide coordinations supplier
                                    we uphold industry and exchange the worldwide.
                                </p>

                                <div className={classes.actions}>
                                    <button className={classes.watchNow}>
                                        Watch Now <FaPlay />
                                    </button>

                                    <button className={classes.watchLater}>
                                        <FaRegBookmark /> Watch Later
                                    </button>
                                </div>
                            </div>

                            <div className={classes.playBtn}>
                            <FaPlay />
                        </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Home5;