import { Link, useNavigate, useParams } from 'react-router-dom';
import pic1 from '../../assets/Images/log.png';
import classes from '../SignUp/SignUp.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../Axios/axios';




const UpdateProfile = () => {
    const { username } = useParams();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        contact: "",
        password: "",
        profile: null,
    });

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        api
            .get("profile/") 
            .then((res) => {
                setFormData({
                    first_name: res.data.first_name || "",
                    last_name: res.data.last_name || "",
                    username: res.data.username || "",
                    email: res.data.email || "",
                    contact: res.data.contact || "",
                    password: "",
                    profile: null,
                });
            })
            .catch((err) => console.error(err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, profile: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submitData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== null) submitData.append(key, value);
        });

        try {
            const token = localStorage.getItem("token"); 

            const res = await api.put(
                `/updateUser/${username}`,
                submitData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Token ${token}` 
                    },
                }
            );
            setMsg("Profile updated successfully!");
            console.log(res.data);
            navigate("/profile");
        } catch (err) {
            setMsg("Something went wrong");
            console.error(err);
        }
    };

    return (
        <>
            <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 px-4 ${classes.register}`}>
                <div className={classes.regbox} style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                    <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                        <h3 className="text-center">Update</h3>

                        <div className='flex gap-2'>
                            <div className="mb-3">
                                <label htmlFor="first_name" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="first_name"
                                    name="first_name"
                                    required
                                    value={formData.first_name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="last_name"
                                    name="last_name"
                                    required
                                    value={formData.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                required
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Contact</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contact"
                                name="contact"
                                required
                                value={formData.contact}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="pic" className="form-label">Profile Picture</label>
                            <input
                                type="file"
                                className="form-control"
                                id="profile"
                                name="profile"
                                // value={profile}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-success">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateProfile;