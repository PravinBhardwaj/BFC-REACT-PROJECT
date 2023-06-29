import React from 'react';
import Jerseyoptions from './Jerseyoptions';
import awaySideImage1 from './webisteimg/Home-Kit---Front-700x700.jpg';
import giftCardImage1 from './webisteimg/Home-Kit---Left-700x700.jpg';
import giftCardImage2 from './webisteimg/Home-Kit-Right-700x700.jpg';
// import giftCardImage3 from './webisteimg/23-Home-Men_s-Jersey (1)(1)(1).jpeg';
import './threeimage.css';

const JerseryBlue = () => {
  return (
    <div classname='jerseybox'>
      {/* Other components */}
      <Jerseyoptions
        awaySideImage1={awaySideImage1}
        giftCardImage1={giftCardImage1}
        giftCardImage2={giftCardImage2}
        // giftCardImage3={giftCardImage3}
        price={"₹1,799.00"}
        name={' BFCREPLICA2023A-Home-Kit'}
      />
      {/* Other components */}
    </div>
  );
};

export default JerseryBlue;
