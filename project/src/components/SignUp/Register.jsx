import { Link, useNavigate } from 'react-router-dom';
import pic1 from '../../assets/Images/log.png';
import classes from './SignUp.module.css';
import { useState } from 'react';
import axios from 'axios';




const Register = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setPic] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("password", password);
    formData.append("profile", profile);

    try {
        const res = await axios.post(
            "http://127.0.0.1:8000/api/register/",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        console.log(res.data);
        setMsg(res.data.message);
        navigate("/login");

    } catch (error) {
        setMsg("Something went wrong");
        console.error(error);
    }
};

    return (
        <>
            <div className={classes.register} style={{ backgroundImage: `url(${pic1})` }}>
                <div className={classes.regbox}>
                    <form method="POST" onSubmit={handleRegister} encType="multipart/form-data">
                        <h3 className="text-center">Register</h3>

                        <div className='flex gap-2'>
                            <div className="mb-3">
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="first_name"
                                name="first_name"
                                required
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)}
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
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
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
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                onChange={(e) => setPic(e.target.files[0])}
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-success">Register</button>
                            <p>Already have an account? <Link to="/login" style={{color:"lightcoral",textDecoration:"none"}}>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;