import pic from '../../../assets/Images/movie1.jpg';
import classes from './Back.module.css';
import { AiFillHome } from "react-icons/ai";




const Movie1 = (props) =>{
    return(
        <>
        <div className={`w-full h-[60vh] flex justify-center items-center text-white bg-center bg-cover bg-no-repeat ${classes.back}`} style={{ backgroundImage: `url(${pic})` }}>
            <div className='text-center'>
                <h1 className={classes.backh1}>{props.title}</h1>
                <div className='flex items-center gap-2'>
                    <span><AiFillHome/></span>
                    <p className='p-0 m-0'>Home</p>
                    <p className='p-0 m-0' style={{color:"#871ABB"}}>/</p>
                    <p className='p-0 m-0' style={{color:"#871ABB"}}>{props.title}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Movie1;