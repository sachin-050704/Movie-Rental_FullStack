import classes from './CSS/Home1_8.module.css';
import pic from '../../assets/Images/home1_8.jpg';




const Home1_8 = () => {
    return (
        <>
            <div className={classes.animate}>
                <div className={classes.anim}>
                    <div className={classes.anim1}>
                        DETROIT, MI JULY 19-25
                    </div>

                    <div className={classes.anim1}>
                        DETROIT, MI JULY 19-25
                    </div>

                    <div className={classes.anim1}>
                        <img src={pic} alt="" style={{ padding: "0 20px" }} />
                        DETROIT, MI JULY 19-25
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home1_8;
