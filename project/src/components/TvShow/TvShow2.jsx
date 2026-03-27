import { Container, Row, Col } from "react-bootstrap";
import pic from '../../assets/Images/tvshow2.jpg';
import classes from './CSS/Tvshow2.module.css'




const TvShow2 = () => {
    return (
        <>
            <div className="bg-black">
                <div className={classes.tvshow2text}>
                    <h1>All The TV You Love</h1>
                    <p className={classes.tvshow2p}>Watch full seasons of exclusive streaming series, current-season episodes, hit movies, tics Originals, kids shows, and more.</p>
                </div>
                <div className={classes.tvshow2box}>
                        <Row>
                            <Col lg={3} sm={6} xs={12}>
                            <div className={classes.tvshow2} style={{background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${pic})`}}>
                                <h5>Past and Current Seasons</h5>
                                <h3>TV Shows</h3>
                            </div>
                            </Col>

                            <Col lg={3} sm={6} xs={12}>
                            <div className={classes.tvshow2} style={{background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${pic})`}}>
                                <h5>Past and Current Seasons</h5>
                                <h3>TV Shows</h3>
                            </div>
                            </Col>

                            <Col lg={3} sm={6} xs={12}>
                            <div className={classes.tvshow2} style={{background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${pic})`}}>
                                <h5>Past and Current Seasons</h5>
                                <h3>TV Shows</h3>
                            </div>
                            </Col>

                            <Col lg={3} sm={6} xs={12}>
                            <div className={classes.tvshow2} style={{background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${pic})`}}>
                                <h5>Past and Current Seasons</h5>
                                <h3>TV Shows</h3>
                            </div>
                            </Col>
                        </Row>
                </div>
            </div>
        </>
    )
}

export default TvShow2;