import React from 'react'
import "./viewbag.css"
import { useSelector } from 'react-redux'

const ViewBag = () => {
  const cartdata = useSelector(state => state.cart.carts);
  console.log(cartdata);
  return (
    <>
    <div>
        <h1>CART</h1>
    </div>
    <div>
    {
              cartdata.map((val)=>{
                return (
                  <div>
                    <div>
                    <img src={val.src} style={{height:'30vh',width:'300px'}}/>
                    <h4>Name : {val.name}</h4>
                    <p>Price : {val.price}</p>
                    <p>Quantity : {val.count}</p>
                    </div>
                  </div>
                )
              })
            }
    </div>
    </>
    
  )
}

export default ViewBag