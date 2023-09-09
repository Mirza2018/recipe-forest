import React, { useContext, useRef, useState } from 'react';
import './Login.css'
import logo from '../../../public/vite.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
import useTitle from '../hooks/useTitle';
import { FaEye, FaRegEyeSlash, FaGoogle, FaGithub, FaFacebook }
    from "react-icons/fa";

const Login = () => {
    const [show, setShow] = useState(false)
    const location = useLocation();
    const navigate = useNavigate()
    const emailRef = useRef()
    useTitle("login")
    const from = location.state?.from?.pathname || '/'
    const { loginUser, loginByGoogle, loginByGithub, loginByFacebook, fogotEmail } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleGoogleLogin = () => {
        loginByGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const handleGithubLogin = () => {
        loginByGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            });

    }
    const handleFacebookLogin = () => {
        loginByFacebook()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            });

    }
    const handleForgotPass = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('please give a vlaid Email')
            return;
        }
        fogotEmail(email)
            .then((result) => {
                alert('Please check your email!!')
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    return (
        <div className="wrapper">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="text-center mt-4 name">
                Wellcome Recipies Forest!!!
            </div>
            <form onSubmit={handleLogin} className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="email" name="email" id="email" ref={emailRef} placeholder="Your Email" required />
                </div>

                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type={show ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                    {
                        show ? <FaEye onClick={() => setShow(!show)} className='h2 text-red-400'></FaEye>
                            :
                            <FaRegEyeSlash onClick={() => setShow(!show)} className='h2 text-green-400'></FaRegEyeSlash>
                    }

                </div>




                <button className="btn mt-3">Login</button>
                <button onClick={handleForgotPass} className="btn mt-3">Forgot password</button>
            </form>
            <button onClick={handleGoogleLogin} className="btn mt-3 d-flex gap-2 pl-10"><FaGoogle /> Login With Google</button>
            <button onClick={handleGithubLogin} className="btn mt-3 d-flex gap-2 pl-10"><FaGithub />Login With Github</button>
            <button onClick={handleFacebookLogin} className="btn mt-3 d-flex gap-2 pl-10"><FaFacebook />Login With Facebook</button>
            <div className="text-center fs-6">
                <a href="#">Forget password?</a> or <Link to="/register">Sign up</Link>
            </div>
        </div>
    );
};

export default Login;