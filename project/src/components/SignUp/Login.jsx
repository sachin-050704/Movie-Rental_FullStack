import { Link, useNavigate } from 'react-router-dom';
import pic from '../../assets/Images/login.avif';
import classes from './SignUp.module.css';
import { useState } from 'react';
import axios from 'axios';
import api from '../Axios/axios';




const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/login/", {
                username: username,
                password: password,
            });

            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            localStorage.setItem("username", username)
            console.log(res.data);
            setMsg(res.data.message);
            navigate("/home")
        } catch (error) {
            setMsg("Something went wrong");
            console.error(error)
        }
    };

    return (
        <>
            <div className={classes.register} style={{ backgroundImage: `url(${pic})` }}>
                <div className={classes.logbox}>
                    <form method="POST" onSubmit={handleLogin}>
                        <h3 className='text-center'>Login</h3>
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
                        <div className="text-center">
                            <button type="submit" className="btn btn-success">Login</button>
                            <p>Don't have an account? <Link to="/register" style={{ color: "lightcoral" }}>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;