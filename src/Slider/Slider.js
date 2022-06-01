import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';

function Slider() {

    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselimage"
                        src="hotelimage.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="font-weight-bold">TAJ HOTEL</h3>
                        <p>5 star hotel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselimage"
                        src="hotelimage1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="font-weight-bold">WHITE PLACE</h3>
                        <p>5 star hotel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselimage"
                        src="hotelimage2.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="font-weight-bold">L hote</h3>
                        <p>5 star hotel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselimage"
                        src="hotelimage3.jpg"
                        alt="Forth slide"
                    />
                    <Carousel.Caption>
                        <h3 className="font-weight-bold">HYATT</h3>
                        <p>5 star hotel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselimage"
                        src="hotelimage4.jpg"
                        alt="Fivth slide"
                    />
                    <Carousel.Caption>
                        <h3 className="font-weight-bold">FLORIDA HOTEL</h3>
                        <p>5 star hotel</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    )
}

export default Slider