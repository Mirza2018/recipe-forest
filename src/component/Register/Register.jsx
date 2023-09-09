
import { Link } from 'react-router-dom';
import logo from '../../../public/vite.svg';
import './Register.css'
import { AuthContext } from '../../provider/Authprovider';
import { useContext, useState } from 'react';
import useTitle from '../hooks/useTitle';
import { sendEmailVerification } from 'firebase/auth';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false)

    useTitle('Register')

    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const url = e.target.photo.value;
        console.log(email, password);
        if (password.length < 8) {
            setError("Your password must be at least 8 characters"); 
            return;
        }
        if (password.search(/[a-z]/i) < 0) {
            setError("Your password must contain at least one letter.");
            return;
        }
        createUser(email, password)
            .then((result) => {
                const user = result.user;

                profileUpdate(name, url)
                    .then((result) => {
                        const user = result.user;
                        console.log(user);
                    })
                    .catch((error) => {
                        console.log(error);
                        setError(error.message)
                    });

                    sendEmailVerification(user)
                    .then(result => {
                        console.log(result);
                    })
                    .catch(error => {
                        console.log(error);
                        setError(error.message)
                    })

                    console.log(user);
                    setError('')                  
            })
            .catch((error) => {      
            });
        e.target.reset()
        setSuccess('Registration Successfully Done')
        setError('')
    }
    return (
        <div className="wrapper">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="text-center mt-4 name">
                Wellcome Recipies Forest!!!
            </div>
            {success && <p className='text-green-600'>{success}</p>}
            {error && <p className='text-red-600'>{error}</p>}
            <form onSubmit={handleRegister} className="p-3 mt-3">

                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="name" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="photo" id="photo" placeholder="Your photo url" required />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="email" id="email" placeholder="Your Email" required />
                </div>

                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type={show?"text":"password"} name="password" id="password" placeholder="Password" required />
                    {
                        show ? <FaEye onClick={()=>setShow(!show)} className='h2 text-red-400'></FaEye>
                            :
                            <FaRegEyeSlash onClick={()=>setShow(!show)} className='h2 text-green-400'></FaRegEyeSlash>
                    }

                </div>

                <button className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6">
                <a href="#">Have account?</a> or <Link to="/Login">Login</Link>
            </div>
        </div>
    );
};

export default Register;