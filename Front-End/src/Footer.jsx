import React from 'react'
import background from "./test2.jpg";
import { NavLink } from 'react-router-dom';

const Footer=()=>{
    return(
        <>
        <footer className= "bg-light text-center">
        <div className="">
            <p><div style={{ backgroundImage: `url(${background})` }}>
                Health and life insurance:HLI-307
        <br /> This webiste is made according to project given by K L university.</div> 

      
 </p>
</div>
        </footer>
       
        </>
    )
}
export default Footer;