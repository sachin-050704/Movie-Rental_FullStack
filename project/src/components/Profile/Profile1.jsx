import classes from './Profile.module.css';
import profile from '../../assets/Images/profile.png';
import { FaEnvelope } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import api from '../Axios/axios';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";




const Profile1 = () => {
    const [data, setData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        api.get("profile/")
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    console.log(data)

    return (
        <>



            <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-4 ${classes.profile}`}>


                {data && (
                    <div className={classes.profileBox}>
                        <div>
                            <div className={classes.profimg}>
                                {data.profile ? <img src={`http://127.0.0.1:8000${data.profile}`} alt="profile" />:<img src={profile} alt="profile" />}
                            </div>
                            <h2 className={classes.profh1}><span>{data.first_name} </span><span>{data.last_name}</span></h2>
                        </div>

                        <div className={classes.profpara}>


                            <div className='flex items-center justify-center gap-2.5 pt-2'>
                                <span><FaEnvelope /></span>
                                <p className={classes.profp}>{data.email}</p>
                            </div>

                            <div className='flex items-center justify-center gap-2.5 pt-2'>
                                <span><FaUser /></span>
                                <p className={classes.profp}>{data.username}</p>
                            </div>

                            {/* <div className={classes.profcal}> */}
                            <div className='flex items-center gap-2.5 pt-2'>
                                <span><RiContactsBook3Fill /></span>
                                <p className={classes.profp}>{data.contact}</p>
                            </div>

                            <div className='flex items-center gap-2.5 pt-2'>
                                <span><FaCalendarDays /></span>
                                <p className={classes.profp}>{data.created_at}</p>
                            </div>

                            <div className={classes.useredit}>
                                <button onClick={()=> navigate(`/updprofile/${data.username}`)}><FaUserEdit/></button>
                            </div>
                        </div>
                    </div>
                )}



            </div>
        </>
    )
}

export default Profile1;