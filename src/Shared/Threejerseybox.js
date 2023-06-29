import React from 'react';
import './threeimage.css';
import { Link } from 'react-router-dom';
import awayfront from './webisteimg/Away Kit Front-700x700.png';
import homefront from './webisteimg/Home-Kit---Front-700x700.jpg';
import tkfront from './webisteimg/TK-Front-700x700.png';

const Threejerseybox=()=>{
    return (
        <div className="cart">
          <h3 style={{ borderBottom: '2px solid rgb(129,126,126)',color:'rgb(129,126,126)',fontSize:'26px',fontWeight:'650px',marginTop:'20px' }}>
            Shop for Bengaluru FC's official match replicas.
          </h3>
          <div className="cartdiv">
        
          <Link to='/option1' ><div className="cartchild" >
              <div className="cartimg">
                <img src={awayfront} alt="" />
                
              </div>
              <div className="pricediv">
                <h4 style={{ marginTop: '90px' }}>Today's Deal</h4>
                <h4>20% off</h4>
                <h4>₹1,499.00</h4>
              </div>
              <div className="cartdetails">
                <h4>
                  2022-23 PUMA Bengaluru FC Away KitAway days are back and there's #NothingLikeIt! Get your hands..
                </h4>
              </div>
            </div></Link>
         
            
            {/* <div className="cartchild" onClick={funshop2}> */}
            <Link to='/option2'>
            <div className="cartchild" >
              <div className="cartimg">
              <img src={homefront} alt="" />
             
              </div>
              <div className="pricediv">
                <h4 style={{ marginTop: '90px' }}>Today's Deal</h4>
                <h4>20% off</h4>
                <h4>₹1,499.00</h4>
              </div>
              <div className="cartdetails">
                <h4>
                  Bengaluru, it’s been a while but it’s that time again. Bring the noise to the Fortress in the all-ne..
                </h4>
              </div>
            </div>
            </Link>
           
            {/* <div className="cartchild" onClick={funshop3}> */}
            <Link to='/option3'>
            <div className="cartchild" >
              <div className="cartimg">
              <img src={tkfront} alt="" />
              </div>
              <div className="pricediv">
                <h4 style={{ marginTop: '90px' }}>Today's Deal</h4>
                <h4>20% off</h4>
                <h4>₹1,499.00</h4>
              </div>
              <div className="cartdetails">
                <h4>
                  The Blues are going green! Get your hands on the all-new PUMA Bengaluru FC Third Kit, made to promot..
                </h4>
              </div>
            </div>
            </Link>
           
          </div>
        </div>
      );
}
export default Threejerseybox;