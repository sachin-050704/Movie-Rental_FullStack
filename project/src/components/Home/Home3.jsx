import classes from '../Home/CSS/Home3.module.css'
import pic1 from '../../assets/Images/h31.jpg'
import pic2 from '../../assets/Images/h32.jpg'
import Btn1 from '../Global/Btn1/Btn1'




const Home3 = () =>{
    return(
        <>
        <div className={classes.home3}>
            <div className={classes.h3b1} style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${pic1})`, backgroundPosition:"top",backgroundSize:"cover" }}>
                <p>Action</p>
                <h1>The Curse of Audrey</h1>
                <Btn1 name={'Watch Now'} style={{ width: "40%", fontWeight: "500" }}/>
            </div>
            <div className={classes.h3b1} style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${pic2})`, backgroundPosition:"top",backgroundSize:"cover"  }}>
                <p>Science Fiction</p>
                <h1>Anything for Jackson</h1>
                <Btn1 name={'Watch Now'} style={{ width: "40%", fontWeight: "500" }}/>
            </div>
        </div>
        </>
    )
}

export default Home3;