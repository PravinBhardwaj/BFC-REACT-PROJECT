import React, { useState } from 'react';
import awaySideImage1 from './webisteimg/Away Kit Front-700x700.png';
import giftCardImage1 from './webisteimg/Home-Kit---Left-700x700.jpg';
import giftCardImage2 from './webisteimg/TK-side-2-700x700.png';
import giftCardImage3 from './webisteimg/23-Third-Men_s-Jersey(1)(1).jpeg';
// import { addTOBag } from '../../redux/actions/action';
import { useDispatch } from 'react-redux';
import './threeimage.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Sponsors from './Sponsors';
import Footer from './Footer';
import fullbfcjersey from './webisteimg/fullbfcjersey.jpg';
import sizechart from './webisteimg/Puma size chart.jpeg';
const Jerseyoptions=(props)=>{

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState('Select');
  const [selectedImg, setSelectedImg] = useState(props.awaySideImage1);
  const [customizedName, setCustomizedName] = useState('');
  const [customizedNumber, setCustomizedNumber] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const changeImg3 = () => {
    setSelectedImg(props.giftCardImage2);
  };
  const changeImg1 = () => {
    setSelectedImg(props.awaySideImage1);
  };

  const changeImg2 = () => {
    setSelectedImg(props.giftCardImage1);
  };

  

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // if (selectedValue === 'Normal') {
    //   setSelectedImg(props.awaySideImage1);
    //   setCustomizedName('');
    //   setCustomizedNumber('');
    //   setSelectedSize('');
    // } else if (selectedValue === 'customjersey') {
    //   setSelectedImg(props.giftCardImage3);
    // }
  };

  const handleCustomizedNameChange = (event) => {
    let value = event.target.value;

    
    value = value.replace(/[^a-zA-Z]/g, '');

    
    if (value.length > 10) {
      value = value.substring(0, 10); 
    }

    setCustomizedName(value);
  };

  const handleCustomizedNumberChange = (event) => {
    let value = event.target.value;
    // Convert value to a number
    value = Number(value);

    // Check if the value exceeds 99
    if (value > 99) {
      value = 99;
    }

    setCustomizedNumber(value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddClick = () => {
    setCount(count + 1);
  };

  const handleMinusClick = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
    <div className="jerseynew_div" style={{ display: 'flex' }}>
      <div className="jerseydiv">
      <div className="jerseyoption" style={{ display: 'flex' }}>
         
         <div className="jerseychilddiv">
           <img
             src={props.giftCardImage1}
             alt=""
             onClick={changeImg2}
             style={{ width: '200px' }}
           />
         </div>
         <div className="jerseychilddiv">
           <img
             src={props.giftCardImage2}
             alt=""
             onClick={changeImg3}
             style={{ width: '200px' }}
           />
         </div>
         <div className="jerseychilddiv">
           <img
             src={props.awaySideImage1}
             alt=""
             onClick={changeImg1}
             style={{ width: '200px' }}
           />
         </div>
       </div>
        {selectedOption !== 'customjersey' && (
          <div className='imgnone'>
          <img
            src={selectedImg}
            alt=""
            className="imgnone"
            id="imgnone"
            style={{ width: '500px' }}
          />
          </div>
        )}
        {selectedOption === 'customjersey' && (
          <img
            src={selectedImg}
            alt=""
            className="imgnone"
            id="imgnone"
            style={{ width: '500px' }}
          />
        )}
        {/* <p id="jerseycustomname-1">{customizedName}</p> */}
        {/* <p id="jerseycustomnumber-1">{customizedNumber}</p> */}

        
      </div>
      <div className="modificationbox-1" id="modificationbox-1">
        <div className="product-code">
          <h4>Product Code: BFCREPLICA2023A</h4>
          <h4>Availability: In Stock</h4>
        </div>
        <div className="price-code">
          <h2>₹1,799.00</h2>
        </div>
        <div className="avail-opt">
          <h2>Available Options</h2>
          <label>Select Jersey Type:-</label>
          <select name="" id="select" onChange={handleSelectChange} style={{marginLeft:'16px' }}>
            
            <option value="Normal">Normal Jersey</option>
            <option value="customjersey">Customised Jersey</option>
          </select>
          {selectedOption === 'Normal' && (
            <>
              <div className='sizebox'>
                <label>Size:</label>
                <select name="" id="size" onChange={handleSizeChange}>
                <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </>
          )}
          {selectedOption === 'customjersey' && (
            <>
              <div className='customsizebox'>
                <div className='Customname'>
                  <label>Customised Name:</label>
                  <input
                    type="text"
                    value={customizedName}
                    onChange={handleCustomizedNameChange}
                    style={{marginLeft:'16px',borderRadius:'20px',outline:'none',padding:'0px 5px',border:'1px solid grey',textAlign:'center' }}
                    placeholder='Enter Name'
                  />
                </div>
                <div>
                  <label>Customised Number:</label>
                  <input
                    type="number"
                    value={customizedNumber}
                    onChange={handleCustomizedNumberChange}
                    placeholder='Enter Number'
                    style={{borderRadius:'20px',outline:'none',padding:'0px 5px',border:'1px solid grey',textAlign:'center' }}
                  />
                </div>
                <div>
                  <label>Size:</label>
                  <select name="" id="size" onChange={handleSizeChange}>
                  <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>
            </>
          )}
          <div className="jerseytype" id="jerseytype-1"></div>
          <div className="addtocart">
          <div className='countbox'>{count}</div>
            <div className='addminusbox'>
            <p onClick={handleAddClick}>+</p>
            <p onClick={handleMinusClick}>-</p>
            </div>
         
            
            
            <button
              className="addbag"
              onClick={() =>
                dispatch({
                  type: 'ADD',
                  payload: {
                    name: props.name,
                    count: count,
                    price: props.price,
                    src: selectedImg,
                    
                  },
                })
              }
            >
              ADD TO CART
            </button>
          </div>
          <div className='description'>
          <p>Get your hands on the 2022-23 Bengaluru FC Kit, as worn by our players during the Blues' run to three finals. Hurry! Limited stock available.</p>
          </div>
        </div>
      </div>
    </div>
    <div className='tabsdiv'>
    <Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',  }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="DESCRIPTION" value="1" />
            <Tab label="ADDITIONAL INFORMATION" value="2" />
            <Tab label="REVIEWS" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className='Decriptionmain'>
            <div className='decriptext'>
            <p>Get your hands on the 2022-23 Bengaluru FC Kit, as worn by our players during the Blues' run to three finals. Hurry! Limited stock available.</p>



              <p>IMPORTANT: In case you want to purchase multiple customized jerseys, please add them individually into the cart with the relevant Name and Number details. Make sure the quantity is 1 when you add it to the cart.</p>  

              <p>  SHIPPING: It will take 15 working days (Excluding Saturday & Sunday) for your order to be delivered. </p>

              <p>  In the case of an order/shipment that cannot be delivered, the package may be returned to our offices, upon which the BFC Merchandise team will get in touch with you for an alternate delivery address.</p>
            </div>
          
<img src={fullbfcjersey} alt=""/>
          </div>
          
        </TabPanel>
        <TabPanel value="2">
          <div className='size_chart'>
            <img src={sizechart} alt=""/>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className='reviews'>
            <p>BE THE FIRST TO REVIEW “TOP WITH PLEATED</p>
            <input  type='text' placeholder='Name' />
            <input  type='email' placeholder='@emailId' />
            <input type="textarea" 
          name="textValue"
           placeholder='Write Your Review here....'
           rows={10}
           cols={10}  
        />
        <button>Submit</button>
          </div></TabPanel>
      </TabContext>
    </Box>
    </div>
    <Sponsors/>
       <Footer/>
    </>
  );
}
export default Jerseyoptions;