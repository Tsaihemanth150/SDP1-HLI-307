import React from 'react'
import { NavLink } from 'react-router-dom';
import background  from "./test2.jpg";
import web2 from "./h1.jpg";


const Life =() => {
   return (
     <>
      <div style={{ backgroundImage: `url(${background})` }}>
      <center><img src={web2} className="col-10 mx-auto" alt="..."/></center>
     </div>
     </>
     )
    }
    
export default Life ;