import Line from "../Global/Purple line div/Line";
import classes from '../Home/CSS/Home8.module.css'
import { Row, Col } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { FaCalendarDays } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import pic1 from '../../assets/Images/h81.jpg'
import pic2 from '../../assets/Images/h82.jpg'
import pic3 from '../../assets/Images/h83.jpg'




const Home8 = () => {
    return (
        <>
            <div className={classes.line1} style={{ backgroundColor: "black" }}>
                <Line temp={"Latest Article"} />
            </div>

            <div className={classes.home8}>
                <Row>
                    <Col xl={4} lg={6} md={6}>
                        <div className={classes.h8box}>
                            <div className={classes.h8icon}>
                                <CiUser />
                                <p>Shikhon H.</p>
                                <FaCalendarDays />
                                <p> 2 comments</p>
                            </div>
                            <h3>Drama Is Life With The Dull Bits ..</h3>
                            <div className={classes.h8read}>
                                <p>Read More</p>
                                <span className={classes.h8arrow}><FaAngleRight /></span>
                            </div>
                            <div className={classes.h8img}><img src={pic1} alt="" srcset="" /></div>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6}>
                        <div className={classes.h8box}>
                            <div className={classes.h8icon}>
                                <CiUser />
                                <p>Shikhon H.</p>
                                <FaCalendarDays />
                                <p> 2 comments</p>
                            </div>
                            <h3>Filmmaking Can Give You Everything.</h3>
                            <div className={classes.h8read}>
                                <p>Read More</p>
                                <span className={classes.h8arrow}><FaAngleRight /></span>
                            </div>
                            <div className={classes.h8img}><img src={pic2} alt="" srcset="" /></div>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={6}>
                        <div className={classes.h8box}>
                            <div className={classes.h8icon}>
                                <CiUser />
                                <p>Shikhon H.</p>
                                <FaCalendarDays />
                                <p> 2 comments</p>
                            </div>
                            <h3>I Love Editing. It’s One Of My Fa..</h3>
                            <div className={classes.h8read}>
                                <p>Read More</p>
                                <span className={classes.h8arrow}><FaAngleRight /></span>
                            </div>
                            <div className={classes.h8img}><img src={pic3} alt="" srcset="" /></div>
                        </div>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default Home8;