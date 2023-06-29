import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'; 
import Slickcaro from './Slickcaro';
import Footer from './Footer';
import  Statsjson from './Statsjson'
import Sponsors from './Sponsors';
import Leaguetable from './Leaguetable';
import BfcStats from './BfcStats';
import firstcaro from './webisteimg/firstcaro.jpg' 
import Secondcaro from './webisteimg/secondcaro.jpg'
import thirdcaro from './webisteimg/thirdcaro.jpg'
import Membership from './webisteimg/Membership1.png'
const Frontpage=()=>{
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img 
              className="d-block w-100  "
              src={firstcaro}
              alt="First slide"
            />
            <Carousel.Caption>
              <Button variant="danger">MATCH PREVIEW</Button>
              <p>Kanteerava prepped for cracker as Bengaluru, Mumbai lock horns in Indian Super League semifinal</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Secondcaro}
              alt="Second slide"
            />
    
            <Carousel.Caption>
            <Button variant="danger">MATCH PREVIEW</Button>
              <p>
                Bengaluru FC begin National Group Stage with 2-1 win over LIFFA </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={thirdcaro}
              alt="Third slide"
            />
    
            <Carousel.Caption>
            <Button variant="danger">MATCH PREVIEW</Button>
           
              <p>
              Bengaluru FC set for Super Cup showdown against Odisha            </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='membership-box'>
            <div className='mebership-card'>
              <img src={Membership} alt=''></img>
            </div>
        </div>
       
        <Leaguetable/>
        <BfcStats/>
        {/* <Statsjson/> */}
        <Slickcaro/>
        <Sponsors/>
       <Footer/>
    
      </>
      )


// render(<ControlledCarousel />);
  
}
export default Frontpage;