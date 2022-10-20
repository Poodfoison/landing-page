import React from 'react'
import {Carousel, Button} from 'react-bootstrap';

export const Hero = () => {
  return (
    <>
    <Carousel fade>
    
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={require('../assets/bg2.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Timeless . Beautiful . Natural</h1>
          <p>For nothing is more of value to us than making a beautiful yet pass.</p>
          <Button variant="outline-light">Book Now</Button>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={require('../assets/bg1.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Timeless . Beautiful . Natural</h1>
          <p>For nothing is more of value to us than making a beautiful yet pass.</p>
          <Button variant="outline-light">Book Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={require('../assets/bg3.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Timeless . Beautiful . Natural</h1>
          <p>
          For nothing is more of value to us than making a beautiful yet pass.
          </p>
          <Button variant="outline-light">Book Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
    
  )
}

