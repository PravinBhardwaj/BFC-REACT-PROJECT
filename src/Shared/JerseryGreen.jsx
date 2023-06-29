import React from 'react';
import Jerseyoptions from './Jerseyoptions';
import awaySideImage1 from './webisteimg/TK-Front-700x700.png';
import giftCardImage1 from './webisteimg/TK-side-1-700x700.png';
import giftCardImage2 from './webisteimg/TK-side-2-700x700.png';
// import giftCardImage3 from './webisteimg/23-Third-Men_s-Jersey(1)(1).jpeg';
import './threeimage.css';

const JerseryGreen = () => {     
    return (
        <div classname='jerseybox'>
          {/* Other components */}
          <Jerseyoptions
            awaySideImage1={awaySideImage1}
            giftCardImage1={giftCardImage1}
            giftCardImage2={giftCardImage2}
            // giftCardImage3={giftCardImage3}
            price={"₹1,799.00"}
            name={' BFCREPLICA2023A-Third-Kit'}
          />
          {/* Other components */}
        </div>
      );
}

export default JerseryGreen