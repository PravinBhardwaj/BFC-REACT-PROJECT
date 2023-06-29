import React from 'react'
import Jerseyoptions from './Jerseyoptions';  
import awaySideImage1 from './webisteimg/Away Kit Front-700x700.png';
import giftCardImage1 from './webisteimg/Away-Side-1-700x700.png';
import giftCardImage2 from './webisteimg/Awya-Side-2-700x700.png';
// import giftCardImage3 from './webisteimg/23-Away-Men_s-Jersey.jpeg';
import './threeimage.css';

const JerseryWhite = () => {
    return (
        <div classname='jerseybox'>
          {/* Other components */}
          <Jerseyoptions
            awaySideImage1={awaySideImage1}
            giftCardImage1={giftCardImage1}
            giftCardImage2={giftCardImage2}
            // giftCardImage3={giftCardImage3}
            price={"₹1,799.00"}
        name={' BFCREPLICA2023A-Away-Kit'}
          />
          {/* Other components */}
        </div>
      );
}

export default JerseryWhite