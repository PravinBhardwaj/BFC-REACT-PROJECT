import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Sponsors from './Sponsors';
import Footer from './Footer';
import Threejerseybox from './Threejerseybox';
import Jerseyoptions from './Jerseyoptions';
import matchkit from './webisteimg/matchkit.jpg';
import tkslide from './webisteimg/TK-Slide-1520x500.jpg';
import mainbanner from './webisteimg/Main-Banner.jpg';
const Shop=()=>{
    return(
       <>


    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={matchkit}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tkslide}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mainbanner}
          alt="Third slide"
        />

       
      </Carousel.Item>
     
    </Carousel>
    <Threejerseybox/>
    {/* <Jerseyoptions/> */}
      <Sponsors/>
      <Footer/>
     
    </>
    )
}
export default Shop;