import Line from "../Global/Purple line div/Line";
import classes from '../Home/CSS/Home4.module.css'
import pic1 from '../../assets/Images/h41.jpg'
import pic2 from '../../assets/Images/h42.jpg'
import pic3 from '../../assets/Images/h43.jpg'
import pic4 from '../../assets/Images/h44.jpg'
import pic5 from '../../assets/Images/h45.jpg'
import pic6 from '../../assets/Images/h46.jpg'
import Btn2 from "../Global/Btn2/Btn2";
import { FaPlay } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";




const Home4 = () => {
    const [showPage, setShowPage] = useState(false);

    return (
        <>
            <div className={classes.line1} style={{ backgroundColor: "black" }}>
                <Line temp={"Trending Videos"} />
            </div>

            <div className={classes.home4}>
                <Row>
                    <Col xl={4} lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic1})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <Btn2 icon={<FaPlay />} style={{ width: "50px", height: "50px", borderRadius: "50%" }} onClick={() => setShowPage(true)} />
                        </div>
                        <h3>Anything for Jackson</h3>
                        <div className={classes.h2p}>
                            <p>Bayley Robertson</p>
                            <p style={{ paddingLeft: "15px" }}>11005 Views</p>
                            <p style={{ paddingLeft: "15px" }}>4 years ago</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic2})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <Btn2 icon={<FaPlay />} style={{ width: "50px", height: "50px", borderRadius: "50%" }} onClick={() => setShowPage(true)} />
                        </div>
                        <h3>Anything for Jackson</h3>
                        <div className={classes.h2p}>
                            <p>Bayley Robertson</p>
                            <p style={{ paddingLeft: "15px" }}>11005 Views</p>
                            <p style={{ paddingLeft: "15px" }}>4 years ago</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic3})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <Btn2 icon={<FaPlay />} style={{ width: "50px", height: "50px", borderRadius: "50%" }} onClick={() => setShowPage(true)} />
                        </div>
                        <h3>Anything for Jackson</h3>
                        <div className={classes.h2p}>
                            <p>Bayley Robertson</p>
                            <p style={{ paddingLeft: "15px" }}>11005 Views</p>
                            <p style={{ paddingLeft: "15px" }}>4 years ago</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic4})`, backgroundPosition: "top", backgroundSize: "cover" }}>
                            <Btn2 icon={<FaPlay />} style={{ width: "50px", height: "50px", borderRadius: "50%" }} onClick={() => setShowPage(true)} />
                        </div>
                        <h3>Anything for Jackson</h3>
                        <div className={classes.h2p}>
                            <p>Bayley Robertson</p>
                            <p style={{ paddingLeft: "15px" }}>11005 Views</p>
                            <p style={{ paddingLeft: "15px" }}>4 years ago</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic5})`, backgroundPosition: "top", backgroundSize: "cover" }}>
                            <Btn2 icon={<FaPlay />} style={{ width: "50px", height: "50px", borderRadius: "50%" }} onClick={() => setShowPage(true)} />
                        </div>
                        <h3>Anything for Jackson</h3>
                        <div className={classes.h2p}>
                            <p>Bayley Robertson</p>
                            <p style={{ paddingLeft: "15px" }}>11005 Views</p>
                            <p style={{ paddingLeft: "15px" }}>4 years ago</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={6} md={12}>
                        <div className={classes.h6b1} style={{ background: `url(${pic6})`, backgroundPosition: "top", backgroundSize: "cover" }}>
                            <Btn2 icon={<FaPlay />} style={{ width: "50px", height: "50px", borderRadius: "50%" }} onClick={() => setShowPage(true)} />
                        </div>
                        <h3>Anything for Jackson</h3>
                        <div className={classes.h2p}>
                            <p>Bayley Robertson</p>
                            <p style={{ paddingLeft: "15px" }}>11005 Views</p>
                            <p style={{ paddingLeft: "15px" }}>4 years ago</p>
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

export default Home4;