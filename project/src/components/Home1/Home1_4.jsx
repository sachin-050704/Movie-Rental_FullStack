import pic from '../../assets/Images/home1_1_4.jpg';
import pic1 from '../../assets/Images/home14s.png';
import classes from './CSS/Home1_4.module.css';
import Btn1 from '../Global/Btn1/Btn1';
import { MdArrowOutward } from "react-icons/md";




const Home1_4 = () => {
    return (
        <>
            <div className={classes.home1_4}>
                <div className={classes.home1_1_4img}>
                    <img src={pic} alt="" />
                </div>
                <div className={classes.home1_1_4ipara}>
                    <div style={{ borderLeft: "3px solid #8919B6", color: "#8919B6" }}>
                        <h5 style={{ textTransform: "uppercase", padding: "0 15px", margin: "0" }}>ABOUT</h5>
                    </div>
                    <h1>From Garage Dreams to Global Streams</h1>
                    <p>What started as late-night jam sessions in a dusty garage has grown into something bigger than we ever imagined.</p>

                    <div className={classes.home14para2} style={{ color: "white" }}>

                        <div className={classes.home14para22} style={{width:"450px",backgroundColor:"#142222",padding:"25px",borderRadius:"10px",textAlign:"center"}}>
                            <p className='text-lg font-medium'>We have multiple models of engagement: We can work directly with individuals for private residences, partner.</p>
                            <div className='flex items-center justify-center'>
                                <img src={pic1} alt="" />
                                <div style={{padding:"0 10px"}}>
                                    <h6 className='p-0 m-0' style={{fontSize:"20px"}}>Marvin McKinney</h6>
                                    <p className='p-0 m-0'>Lead Developer</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${classes.home14p2} space-y-6 justify-self-end mt-20`} style={{width:"400px"}}>
                            <div className="flex gap-4 items-center">
                                <div className="bg-[#0f1f1f] p-3 rounded-xl">
                                    🏆
                                </div>
                                <div>
                                    <h4 className="font-semibold">Grammy Awards</h4>
                                    <p className="text-gray-400 text-sm">
                                        Aiden Melisma's melodies enchanted hearts, winning Grammy
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="bg-[#0f1f1f] p-3 rounded-xl">
                                    🎵
                                </div>
                                <div>
                                    <h4 className="font-semibold">Billboard Music Awards</h4>
                                    <p className="text-gray-400 text-sm">
                                        Aiden Melisma's melodies enchanted hearts, winning Grammy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 style={{paddingTop:"40px"}}>Music, passion, history</h4>
                    <p style={{width:"70%",fontSize:"16px"}}>Every great band has a story—and ours is written in sound. From the first chord we struck to the last encore that shook the stage</p>

                    <Btn1 name={"About"} icon={<MdArrowOutward />} style={{ width: "25%", padding: "12px 15px" }} />
                </div>
            </div>
        </>
    )
}

export default Home1_4;