import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    
    <Carousel className='mx-auto col-lg-6'>
    <Carousel.Item interval={2000}>
      <img
        className="d-block align-items-center imagen"
        src='./1.jpg'
        alt="Salon 1"
      />

    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block align-items-center imagen"
        src='./2.jpg'
        alt="Salon 2"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block align-items-center imagen"
        src='./3.jpg'
        alt="Salon 3"
      />

    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block align-items-center imagen"
        src='./4.jpg'
        alt="Salon 4"
      />

    </Carousel.Item>
  </Carousel>
  )
}

export default Carrusel