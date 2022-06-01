import React from 'react'
import Slider from '../Slider/Slider';
import About from '../About/About';
import Contact from '../Contact/Contact';


function Home() {
    return (
        <>

            {/* carousel */}

            <Slider />

            {/* about */}

            <About />

            {/* contact */}

            <Contact />

        </>
    )
}

export default Home;