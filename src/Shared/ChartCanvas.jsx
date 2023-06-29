import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaTimesCircle} from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate(-1);
  }  
  // const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const cartdata = useSelector(state => state.cart.carts);
  console.log(cartdata);
  const data = useSelector(state => state.cart.countvalue);
  console.log(data)
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button> */}
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='centercartbox'>
           {(data === 0) ?<h5><FaShoppingBasket/></h5> : null } 
            {
              cartdata.map((val,ind)=>{
                return (
                  <div>
                  <div style={{textAlign:'End'}}><button className='removebtn' onClick={()=>{dispatch({type:"REMOVE",payload:ind,count:val.count})}}> <FaTimesCircle/></button></div>

                    <div>
                    <img src={val.src} style={{height:'100px',width:'80px'}}/>
                    <h4>Name : {val.name}</h4>
                    <p>Price : {val.price}</p>
                    <p>Quantity : {val.count}</p>
                    </div>
                  </div>
                )
              })
            }
        </div>
        {(data === 0) ? <h1>Your Bag Is Empty</h1> :<>
        <Link to='/viewbag'> <button>view bag</button></Link>
       
        <Link to='/checkout'><button>checkout</button></Link></>
  }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Example;
