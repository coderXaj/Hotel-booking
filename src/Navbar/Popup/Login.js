import React, { useState, useEffect } from 'react'
import './Login.css'
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

function Login() {
    const [formValues, setFormValues] = useState({           //using usestate to change the value
        email: "",                                 //current state of email is blank
        password: ""                               //current state of password is blank
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        setFormValues({
            ...formValues, [event.target.name]: event.target.value,     //changing current state by typing some value in input
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();                    //using event.preventDefault() to not reload page on clicking button                        
        setFormErrors(validate(formValues));       //using setFormErrors(validate(formValues)) validated the form
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {

        }
    }, [formErrors])

    const validate = (values) => {
        const error = {};
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;        //regular expression shortened as 'regex' are special strings representing a pattern to be matched in a search operation.  
        if (!values.email) {
            error.email = "Email is required";
        } else if (!regex.test(values.email)) {
            error.email = "This is not a valid email format!"
        }
        if (!values.password) {
            error.password = "Password is required!";
        } else if (values.password.length < 5) {
            error.password = "Password is must be more than 4 characters!";
        } else if (values.password.length > 15) {
            error.password = "Password cannot exceed more than 15 characters!";
        }
        return error;
    };

    return (
        <>
            <div className='back-background'>
                {(Object.keys(formErrors).length === 0 && isSubmit) ? (<div className='ss'><h2>Login successfully</h2></div>) : (

                    <div className='login-container1'>
                        <h3>Login</h3>
                        <form onSubmit={handleFormSubmit}>
                            <input className='login-email' type='text' name='email' id='email' placeholder='Email' value={formValues.email} onChange={handleChange} />
                            <p className='error'>{formErrors.email}</p>
                            <input className='login-password' type='password' name='password' id='password' placeholder='Password' value={formValues.password} onChange={handleChange} />
                            <p className='error'>{formErrors.password}</p>
                            <a href='#'>Forget Password?</a><br />
                            <button className='login-button'>LOGIN</button>
                            <p>Don't have account?<Link to="/signup">Sign up</Link></p>
                            <hr className='line' />
                            <div className='login-container2'>
                                <p>Or sign in with</p>
                                <div className='login-gooface'>
                                    <a href='#' className='login-goo'><FcGoogle /></a>
                                    <a href='#' className='login-face'><BsFacebook /></a>
                                </div>
                            </div>
                        </form>
                    </div>)}
            </div>
        </>
    )
}

export default Login

{/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre>  <pre> tag define exact text written */ }