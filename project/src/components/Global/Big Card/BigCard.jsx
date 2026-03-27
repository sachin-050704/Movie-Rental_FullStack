import classes from './BigCard.module.css';
import card from '../../../assets/Images/bigcard1.png';
import { FaDoorOpen } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';
import { LuMapPin } from "react-icons/lu";
import Btn1 from '../Btn1/Btn1';
import { MdArrowOutward } from "react-icons/md";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaTiktok,
} from "react-icons/fa";




const BigCard = (props) => {
    return (
        <>
            <div className={classes.bigcard}>
                <Row>
                    <Col xl={4} lg={12} md={12}>
                        <div className={classes.bigcardimg} ><img src={props.img} alt="" srcset="" /></div>
                    </Col>
                    <Col xl={6} lg={12} md={12}>
                        <div className={`${classes.bigcardimg} ${classes.bigcardimg1}`} style={{ width: "100%" }}>
                            <div className={`${classes.btn1}`}>
                                <span><FaDoorOpen /></span>
                                <button>Room 2025</button>
                            </div>
                            <h3>{props.title}</h3>
                            <div className={classes.cardIcon}>
                                <span style={{color:"lightgreen",paddingRight:"8px"}}><LuMapPin /></span>
                                <p> Bauhof, 4652 Steinerkirchen an der Traun</p>
                            </div>
                            <div className={classes.shareit}>
                                <Btn1 name={"View Ticket"} icon={<MdArrowOutward />} style={{ width: "200px", color: "white" }} />
                                <div className={classes.share}>
                                    <p>You Can Share It :</p>
                                    <div className={classes.socialIcons}>
                                        <span><FaLinkedin /></span>
                                        <span><FaTwitter /></span>
                                        <span><FaInstagram /></span>
                                        <span><FaFacebookF /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={2} lg={12} md={12}>
                        <div className={classes.bigcardimg3} style={{ width: "100%" }}>
                            <div className={classes.cardline}></div>
                            <h1>18 July, 2025</h1>
                            {/* <p>18 July, 2025</p> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default BigCard;