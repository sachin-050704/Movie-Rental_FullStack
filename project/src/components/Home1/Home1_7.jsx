import pic from '../../assets/Images/home1_7.jpg';
import pic1 from '../../assets/Images/circle.png';
import classes from './CSS/Home1_7.module.css';
import { FaPlay } from "react-icons/fa";




const Home1_7 = () =>{
    return(
        <>
        <div className={classes.home1_7} style={{backgroundImage:`url(${pic})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className={classes.circle}>
                            <img src={pic1} alt="" srcset="" />
                            <div className={classes.semiCircle}>
                                <span style={{color:"#D22C39",fontSize:"25px"}}><FaPlay/></span>
                            </div>
                        </div>
        </div>
        </>
    )
}

export default Home1_7;