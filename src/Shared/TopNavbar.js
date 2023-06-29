import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Style.css'
import { FaShoppingCart,FaUser } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import sitelog from './webisteimg/sitelogo-small2019.png'


const TopNavbar=()=>{
    const data = useSelector(state=>state.cart.countvalue)
    console.log(data)
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

    const handleNavbarToggle = () => {
      setIsNavbarCollapsed(!isNavbarCollapsed);
    };
    return(
        <>
       <Navbar collapseOnSelect expand="md" variant="dark" sticky="top" className={isNavbarCollapsed ? 'navbar-collapsed' : ''}>
        <Container >
          <Navbar.Brand href="#home"><img src={sitelog} alt='' className='logoimg' style={{height:"60px",width:"70px" }}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavbarToggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
          <div className='navlink_div'>
          <NavLink style={{  color:"white" , textDecoration:"none"}}
          to='/' 
          className={(isActive)=>isActive.isActive?'activeClassName navlink':'navlink'}
          >Home</NavLink>

           <NavLink style={{ color:"white" , textDecoration:"none"}}
          to='/FirstTeam' 
          className={(isActive)=>isActive.isActive?'activeClassName navlink':'navlink'}
          >Squad</NavLink>

          <NavLink style={{ color:"white" , textDecoration:"none"}}
          to='/News' 
          className={(isActive)=>isActive.isActive?'activeClassName navlink':'navlink'}
          >News</NavLink>

          <NavLink style={{ color:"white" , textDecoration:"none"}}
          to='/Club' 
          className={(isActive)=>isActive.isActive?'activeClassName navlink':'navlink'}
          >Club</NavLink>

          <NavLink style={{ color:"white" , textDecoration:"none"}}
          to='/Shop' 
          className={(isActive)=>isActive.isActive?'activeClassName navlink':'navlink'}
          >Shop</NavLink>
          </div>
          <div className='navlink-icondiv'>
            <NavLink style={{ color:"white" , textDecoration:"none"}}
          to='/MemberShip' 
          className={(isActive)=>isActive.isActive?'activeClassName navlink':'navlink'}
          ><FaUser/></NavLink>

          <NavLink style={{ color:"white" , textDecoration:"none"}}
          as={Link} to='/Cart' 
          className={(isActive)=>isActive.isActive?'activeClassName navlink':'navlink'}
          ><FaShoppingCart/>{data==0?null : data}   </NavLink>
            </div>
          </Navbar.Collapse>
         
          
          
        </Container>
      </Navbar>

    
     
        </>
    )
}
export default TopNavbar;



