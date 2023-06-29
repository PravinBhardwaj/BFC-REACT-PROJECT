import React, { useState } from 'react';
import Sponsors from './Sponsors';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import UserLogin from './UserLogin';
import Banner from './webisteimg/Banner (1).jpg';
import webbanner from './webisteimg/Web-Banner-2.jpg';

const MemberShip = () => {
  const [membership, setMembership] = useState(false);

  const showMembership = () => {
    setMembership(prevMembership => !prevMembership);
  };

  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={webbanner} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="membership_div_main">
        <div className="membership_img_div"  onClick={showMembership}>
          <button className="memberbutton">
          CLICK & BECOME A MEMBER
          </button>
        </div>
      </div>
      {membership && <UserLogin onClose={() => setMembership(false)} />}
      <Sponsors />
      <Footer />
    </>
  );
};

export default MemberShip;
