import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <>
            <div className='con-maincontainer'>
                <div className='con-container1'>
                    <h3>Contact Us</h3>
                    <p>Feel like conatcing us? Submit your queries here and
                        we will get back to you as soon as possible.
                    </p>
                </div>
                <div className='con-container2'>
                    <form action='/'>
                        <span className='con-inputspan1'>Send us a Message</span>
                        <input className='con-inputtext' type='text' name='fullname' placeholder='Name' />
                        <input className='con-inputtext' type='text' name='email' placeholder='Email' />
                        <input className='con-inputtext' type='text' name='phonenumber' placeholder='Phone' />
                        <span className='con-inputspan2'>Preffered method of communication</span><br />
                        <input className='con-inputradio' type='radio' name='rcontact' value='email' />
                        <label className='con-labelradio'>Email</label>
                        <input className='con-inputradio' type='radio' name='rcontact' value='phone' />
                        <label className='con-labelradio'>Phone</label>
                        <input className='con-inputtext' type='text' name='message' placeholder='Message' />
                        <button className='con-submit' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact