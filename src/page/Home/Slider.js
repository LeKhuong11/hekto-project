import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner from './Banner';
import Banner2 from './Banner2';
import './home.scss'


function Slider() {
    return (
      <Carousel variant="dark">
        <Carousel.Item>
          <Banner />
        </Carousel.Item>

        <Carousel.Item>
          <Banner2 />
        </Carousel.Item>

        <Carousel.Item>
          <Banner />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Slider;