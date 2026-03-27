import Line from "../Global/Purple line div/Line";
import classes from '../Home/CSS/Home6.module.css'
import pic1 from '../../assets/Images/h61.jpg'
import pic2 from '../../assets/Images/h62.jpg'
import pic3 from '../../assets/Images/h63.jpg'
import pic4 from '../../assets/Images/h64.jpg'
import Btn2 from "../Global/Btn2/Btn2";
import { FaPlay } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";




const Home6 = () => {
    const [showPage, setShowPage] = useState(false);

    return (
        <>
            <div className={classes.line1} style={{ backgroundColor: "black" }}>
                <Line temp={"Upcoming Movies"} />
            </div>

            <div className={classes.home6}>
                <Row>
                    <Col lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic1})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <Btn2 name={"WATCH TRAILER"} icon={<FaPlay />} onClick={() => setShowPage(true)} />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic2})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <Btn2 name={"WATCH TRAILER"} icon={<FaPlay />} onClick={() => setShowPage(true)} />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic3})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <Btn2 name={"WATCH TRAILER"} icon={<FaPlay />} onClick={() => setShowPage(true)} />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic4})`, backgroundPosition: "top", backgroundSize: "cover" }}>
                            <Btn2 name={"WATCH TRAILER"} icon={<FaPlay />} onClick={() => setShowPage(true)} />
                        </div>
                    </Col>
                </Row>

            </div>

            {showPage && (
                <div className={classes.fulloverlay}>
                    <div className={classes.content}>
                        <div className="text-right">
                            <button onClick={() => setShowPage(false)} style={{ fontSize: "25px", color: "white" }}><RxCross2 /></button>
                        </div>
                        <div className={classes.content1}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/eNvUS-6PTbs?si=Z79ARJXzBSUu7w9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>


                    </div>
                </div>
            )}
        </>
    )
}

export default Home6;