import React from 'react'
import { NavLink } from 'react-router-dom';
import background  from "./test2.jpg";


const Navbar =() => {
   return (
     <> 
     <div style={{ backgroundImage: `url(${background})` }}>
     <div className="container-fluid nav_bg">
      <div className='row'>
          <div className="col-10 mx-auto">    
     <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
  
    <NavLink exact className="navbar-brand" to="/">
   <b> Health And Life Insurance (HIL) </b>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu_active ' className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink ActiveClassname='menu_active' className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink ActiveClassname='menu_active' className="nav-link" to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink ActiveClassname='menu_active' className="nav-link" to="/Login">Login </NavLink>
        </li>
        <li className="nav-item">
          <NavLink ActiveClassname='menu_active' className="nav-link" to="/Sinup">Signup </NavLink>
        </li>
        <li className="nav-item">
          <NavLink ActiveClassname='menu_active' className="nav-link" to="/Contact">Contact </NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</div>
 </div>
</div></div>
     </>
   )
}

export default Navbar;