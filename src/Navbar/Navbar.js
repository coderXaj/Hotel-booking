import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsJustify } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import './Navbar.css'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <>
            <nav>
                <div className='main'>
                    <h2 className='logo'>AJ COMPANY</h2>
                    <span>HOTEL BOOKING</span>
                </div>
                <div className={showLinks ? 'menu2' : 'menu'}>
                    <Link to="/">Home</Link>
                    <Link to="/hotel">Hotel</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <div><Link to="/login"><button className='btn1'>Log in</button></Link></div>
                    <div><Link to="/signup"><button className='btn2'>Sign up</button></Link></div>
                </div>
                <div className='logo2' onClick={() => setShowLinks(!showLinks)}>{showLinks ? <AiOutlineClose /> : <BsJustify />}</div>
            </nav>
        </>
    )
}

export default Navbar