import React, {useState,Component } from "react";
import Slider from "react-slick";
import { Dataofslick } from "./Dataofslick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import '../style.css'
const Slickcaro = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 6000,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay:true,
      autoplaySpeed:500,
      cssEase:"linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
     
      };

    
  





    
  return (
    
        
   

    
      <div className="caro-maindiv" >
        <h1>Honors</h1>
        <Slider {...settings}>
        
      {Dataofslick.map((item) => {
        return(
          
           <div className="card-slick">
            
            <div className="card-top-slick">
              <img src={item.Image} alt={item.title}/>
              <h6>{item.title}</h6>
            </div>
           </div>)         
            })}
                 </Slider>
      </div>
              
           
    
      
  )
}

export default Slickcaro