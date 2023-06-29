import React, { useState } from 'react';
import homeSidefront from './webisteimg/Home-Kit---Front-700x700.jpg';
import homeside1 from './webisteimg/Home-Kit---Left-700x700.jpg';
import homeside2 from './webisteimg/Home-Kit-Right-700x700.jpg';
import homeside3 from './webisteimg/23-Home-Men_s-Jersey (1)(1)(1).jpeg';

const JersyOption2 = () => {
  const [selectedOption, setSelectedOption] = useState('Select');
  const [selectedImg, setSelectedImg] = useState(homeSidefront);
  const [customizedName, setCustomizedName] = useState('');
  const [customizedNumber, setCustomizedNumber] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const changeImg1 = () => {
    setSelectedImg(homeSidefront);
  };

  const changeImg2 = () => {
    setSelectedImg( homeside1);
  };

  const changeImg3 = () => {
    setSelectedImg(homeside2);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === 'Normal') {
      setSelectedImg(homeSidefront);
      setCustomizedName('');
      setCustomizedNumber('');
      setSelectedSize('');
    } else if (selectedValue === 'customjersey') {
      setSelectedImg(homeside3);
    }
  };

  const handleCustomizedNameChange = (event) => {
    setCustomizedName(event.target.value);
  };

  const handleCustomizedNumberChange = (event) => {
    setCustomizedNumber(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="jerseydiv">
        {selectedOption !== 'customjersey' && (
          <img
            src={selectedImg}
            alt=""
            className="imgnone"
            id="imgnone"
            style={{ width: '500px' }}
          />
        )}
        {selectedOption === 'customjersey' && (
          <img
            src={homeside3}
            alt=""
            className="imgnone"
            id="imgnone"
            style={{ width: '500px' }}
          />
        )}
        <p id="jerseycustomname-1">{customizedName}</p>
        <p id="jerseycustomnumber-1">{customizedNumber}</p>

        <div className="jerseyoption" style={{ display: 'flex' }}>
          <div className="jerseychilddiv">
            <img
              src={homeSidefront}
              alt=""
              onClick={changeImg1}
              style={{ width: '200px' }}
            />
          </div>
          <div className="jerseychilddiv">
            <img
              src={ homeside1}
              alt=""
              onClick={changeImg2}
              style={{ width: '200px' }}
            />
          </div>
          <div className="jerseychilddiv">
            <img
              src={homeside2}
              alt=""
              onClick={changeImg3}
              style={{ width: '200px' }}
            />
          </div>
        </div>
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
          <label>*Jersey Type</label>
          <select name="" id="select" onChange={handleSelectChange}>
            <option value="Select">-:Select:-</option>
            <option value="Normal">Normal Jersey</option>
            <option value="customjersey">Customised Jersey</option>
          </select>
          {selectedOption === 'Normal' &&(
            <>
             <div>
          <label>Size:</label>
              <select name="" id="" onChange={handleSizeChange}>
                <option value="">-:Select Size:-</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
          </div>
            </>
          )}
          {selectedOption === 'customjersey' && (
            <>
            <div>
                <div>
                <label>Customised Name:</label>
              <input type="text" value={customizedName} onChange={handleCustomizedNameChange} />
                </div>
          <div>
          <label>Customised Number:</label>
              <input type="number" value={customizedNumber} onChange={handleCustomizedNumberChange} />
          </div>
          <div>
          <label>Size:</label>
              <select name="" id="" onChange={handleSizeChange}>
                <option value="">-:Select Size:-</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
          </div>
             
             
            </div>
          
            </>
          )}
          <div className="jerseytype" id="jerseytype-1">
            
          </div>
          <div className="addtocart">
            <h3>QTY</h3>
            <input type="Number" name="" id="" />
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JersyOption2;



