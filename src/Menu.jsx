import React from 'react';
import { NavLink } from 'react-router-dom';




const Menu = () => {
  return (

    <>
<ul className='navemenu'>

   <li> <NavLink exact to="/">Home</NavLink></li>
   <li><NavLink exact to="/about">About</NavLink></li>
   <li><NavLink exact to="/service">Service</NavLink></li>
   
   
    </ul>
    </>

   )
}

export default Menu;
