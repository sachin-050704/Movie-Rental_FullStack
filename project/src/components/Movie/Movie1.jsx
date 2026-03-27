import pic from '../../assets/Images/movie1.jpg';
import Back from '../Global/Back/Back';
import classes from './CSS/Movie1.module.css';
import { AiFillHome } from "react-icons/ai";




const Movie1 = () =>{
    return(
        <>
        {/* <div className={`w-full h-[60vh] flex justify-center items-center text-white bg-center bg-cover bg-no-repeat ${classes.movie1}`} style={{ backgroundImage: `url(${pic})` }}>
            <div className='text-center'>
                <h1>Movies</h1>
                <div className='flex items-center gap-2'>
                    <span><AiFillHome/></span>
                    <p className='p-0 m-0'>Home</p>
                    <p className='p-0 m-0' style={{color:"#871ABB"}}>/</p>
                    <p className='p-0 m-0' style={{color:"#871ABB"}}>Movies</p>
                </div>
            </div>
        </div> */}
        <Back title={"Movies"}/>
        </>
    )
}

export default Movie1;