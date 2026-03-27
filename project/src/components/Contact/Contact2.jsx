import classes from './CSS/Contact2.module.css';
import { Row, Col } from 'react-bootstrap';
import pic from '../../assets/Images/contact1.png';
import pic1 from '../../assets/Images/contact2.jpg';
import { TbPhoneCalling } from "react-icons/tb";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Btn2 from '../Global/Btn2/Btn2';
import Btn1 from '../Global/Btn1/Btn1';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Contact2 = () => {
    const [contact_name, setContactName] = useState("");
    const [contact_email, setContactEmail] = useState("");
    const [contact_msg, setContactMsg] = useState("");
    const [userData, setUserData] = useState();
    const navigate = useNavigate();

    const formData = new FormData();
    formData.append("contact_name", contact_name);
    formData.append("contact_email", contact_email);
    formData.append("contact_msg", contact_msg);

    const token = localStorage.getItem("access");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/profile/",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        )
        .then(res => res.json())
        .then(data => {
            setUserData(data);
            if(data){
                const fullName = `${data.first_name} ${data.last_name}`
                setContactName(fullName)
                setContactEmail(data.email)
            }
        })
        .catch(err => console.log(err))
    }, [])

    console.log(userData)


    const handleSubmitContact = async (e) =>{
        e.preventDefault();

        try{
           const res = axios.post("http://127.0.0.1:8000/movies/contactForm/", formData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            }
        )
        setMsg("Contact enquiry sent successfully!");
        console.log(res.data);
        navigate("/home");
        }
        catch(err){
            console.error(err)
        }
    }

    return (
        <>
            <div className={classes.contact2}>
                <Row>
                    <Col lg={6}>
                        <div className={classes.contact2box1}>
                            <div className={classes.con2b1}>
                                <div className={classes.circle}>
                                    <img src={pic} alt="" />
                                    <div className={classes.semiCircle}>
                                        <span style={{ color: "white", fontSize: "25px" }}><TbPhoneCalling /></span>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <p className='p-0 m-0'>Call Us 7/24</p>
                                    <h2 className='p-0 m-0'>+208-555-0112</h2>
                                </div>
                            </div>
                        </div>

                        <div className={classes.contact2box1}>
                            <div className={classes.con2b1}>
                                <div className={classes.circle}>
                                    <img src={pic} alt="" />
                                    <div className={classes.semiCircle}>
                                        <span style={{ color: "white", fontSize: "25px" }}><BsEnvelopeAtFill /></span>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <p className='p-0 m-0'>Make a Quote</p>
                                    <h2 className='p-0 m-0'>Example@gmail.com</h2>
                                </div>
                            </div>
                        </div>

                        <div className={classes.contact2box1}>
                            <div className={classes.con2b1} style={{ border: "none" }}>
                                <div className={classes.circle}>
                                    <img src={pic} alt="" />
                                    <div className={classes.semiCircle}>
                                        <span style={{ color: "white", fontSize: "25px" }}><MdLocationPin /></span>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <p className='p-0 m-0'>Location</p>
                                    <h2 className='p-0 m-0'>4517 Washington ave.</h2>
                                </div>
                            </div>
                        </div>

                        <div className={classes.conbox1b1}>
                            <img src={pic1} alt="" style={{ width: "100%" }} />
                            <div className={classes.conb1}><Btn2 icon={<FaPlay />} style={{ width: "60px", height: "60px", borderRadius: "50%" }} /></div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <section className="bg-black text-white py-16 px-10">
                            <div className="max-w-6xl mx-auto">

                                <h2 className="text-6xl md:text-6xl font-bold mb-6">
                                    Ready To Get Started?
                                </h2>

                                <p className="text-gray-400 max-w-2xl mb-10">
                                    Nullam varius, erat quis iaculis dictum, eros urna varius eros,
                                    ut blandit felis odio in turpis. Quisque rhoncus, eros in auctor ultrices.
                                </p>

                                <form method='POST' className="space-y-6" onSubmit={handleSubmitContact}>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        <div>
                                            <label className="block text-gray-300 mb-2">Your Name*</label>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                                                style={{ backgroundColor: "#1A1A1A" }}
                                                value={contact_name}
                                                onChange={(e)=>setContactName(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-300 mb-2">Your Email*</label>
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                className="w-full rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                                                style={{ backgroundColor: "#1A1A1A" }}
                                                value={contact_email}
                                                onChange={(e)=>setContactEmail(e.target.value)}
                                                required
                                            />
                                        </div>

                                    </div>

                                    <div>
                                        <label className="block text-gray-300 mb-2">Write Message*</label>
                                        <textarea
                                            rows="6"
                                            placeholder="Write Message"
                                            className="w-full rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                                            style={{ backgroundColor: "#1A1A1A" }}
                                            value={contact_msg}
                                            onChange={(e)=>setContactMsg(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <Btn1 name={"Send Message"} style={{ width: "30%" }} />

                                </form>
                            </div>
                        </section>
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default Contact2;