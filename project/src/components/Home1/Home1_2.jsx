import classes from './CSS/Home1_2.module.css';
import pic from '../../assets/Images/circle.png';
import { FaPlay } from "react-icons/fa";
import BigCard from '../Global/Big Card/BigCard';
import card1 from '../../assets/Images/bigcard1.png';
import card2 from '../../assets/Images/bigcard2.png';
import card3 from '../../assets/Images/bigcard3.png';






const Home1_2 = () =>{
    return(
        <>
        <div className={classes.home1_2}>
            <div className={classes.circle}>
                <img src={pic} alt="" srcset="" />
                <div className={classes.semiCircle}>
                    <span style={{color:"#D22C39",fontSize:"25px"}}><FaPlay/></span>
                </div>
            </div>

            <h1>UPCOMING EVENT</h1>
            <div className="home1_2box">
                <BigCard img={card1} title={"Live at The Sound Lounge"}/>
                <BigCard img={card2} title={"Summer Beats Festival"}/>
                <BigCard img={card3} title={"Rhythm Night – Album Launch"}/>
            </div>

            
        </div>
        </>
    )
}

export default Home1_2;