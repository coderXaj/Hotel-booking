import React, { useState, useEffect } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';

function Signup() {

    const [signupValues, setSignupValues] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });
    const [signupErrors, setSignupErrors] = useState({});
    const [submit, setSubmit] = useState(false)

    const handleChange = (e) => {
        setSignupValues({
            ...signupValues, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSignupErrors(validate(signupValues));
        setSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(signupErrors).length === 0 && submit) { }
    }, [signupErrors])


    const validate = (values) => {
        const error = {};
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!values.fname) {
            error.fname = "First name is requird"
        } else if (values.fname.length <= 2) {
            error.fname = "This is invalid name"
        }
        if (!values.lname) {
            error.lname = "Last name is requird"
        } else if (values.lname.length < 2) {
            error.lname = "This is invalid name"
        }
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
    }
    return (
        <>
            <div className='sign-background'>
                {(Object.keys(signupErrors).length === 0 && submit) ? (<div className='ss'><h2>Signup successfully</h2></div>) : (
                    <div className='sign-container'>
                        <h3>Sign Up</h3>
                        <form >
                            <input type='text' name='fname' id='fname' placeholder='First Name' onChange={handleChange} value={signupValues.fname} />
                            <p className='error'>{signupErrors.fname}</p>
                            <input type='text' name='lname' id='lname' placeholder='Last Name' onChange={handleChange} value={signupValues.lname} />
                            <p className='error'>{signupErrors.lname}</p>
                            <input type='text' name='email' id='email' placeholder='Email' onChange={handleChange} value={signupValues.email} />
                            <p className='error'>{signupErrors.email}</p>
                            <input type='password' name='password' id='password' placeholder='Password' onChange={handleChange} value={signupValues.password} />
                            <p className='error'>{signupErrors.password}</p>
                            <button onClick={handleSubmit}>Sign up</button>
                            <p>Already a member?<Link to='/login'>Log In</Link></p>
                        </form>
                    </div>)}
            </div>
        </>
    )
}

export default Signup