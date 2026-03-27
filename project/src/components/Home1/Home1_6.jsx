import { Row,Col } from "react-bootstrap";
import pic1 from '../../assets/Images/home1_61.jpg';
import pic2 from '../../assets/Images/home1_62.jpg';
import pic3 from '../../assets/Images/home1_63.jpg';
import pic4 from '../../assets/Images/home1_64.jpg';
import pic5 from '../../assets/Images/home1_65.jpg';
import pic6 from '../../assets/Images/home1_66.jpg';
import pic7 from '../../assets/Images/home1_67.jpg';
import pic8 from '../../assets/Images/home1_68.jpg';
import classes from './CSS/Home1_6.module.css';




const Home1_6 = () =>{
    return(
        <>
        <div className={classes.home1_6}>
            <div>
                <h2 className={classes.home1_6text}>Partners</h2>
                <div className="grid grid-cols-2 justify-self-center md:grid-cols-3 lg:grid-cols-9 gap-0">
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic1} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic2} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic1} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic2} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic3} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic4} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic5} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic6} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic7} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic8} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic5} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic7} alt="" /></div>
                    <div className={classes.home16_black}></div>
                    <div className={classes.home16_box}><img src={pic5} alt="" /></div>
                    <div className={classes.home16_black}></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home1_6;