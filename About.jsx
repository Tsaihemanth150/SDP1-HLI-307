import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "./h2.jpg";

const About =() => {
   return (
     <>
     <h1 className='text-center'>About us</h1>
   <center>  <h5>We are the leading serveice provider in the insurance sectors.
     "To be a leader and role model in a broad-based and integrated financial services business." <br />

The 4 pillars of our vision that will help us achieve it are: <br />

To be a leader – we are committed to being a leader in all facets of our businesses, rather than being just another participant in this race. <br />

To be a role model – we will not become leaders by cutting corners or making compromises. Whatever we do, we will strive to be the best in class. And if we are the best, then our customer will have no reason to go elsewhere – therefore our leadership is assured, on pure merit. <br />

To be a broad-based player – we are committed to meeting all the felt and unfelt needs of our target customer. And thereby, we can retain him or her across their needs and life-stages. <br />
<img src={web} alt="image broken" sizes="" srcset="" /> <br />
We aim to be an integrated player –we believe that this approach gives us a competitive edge through sharing of best practices, deriving cross – business synergies & providing talent pool with world of opportunity to grow. <br />



Our customers place a lot of trust when they choose us as a partner for fulfillment of their dreams - be it buying a dream home or investing their hard earned money in mutual funds or for meeting their retirement or child's education or protection needs or taking a business loan for expansion. At Aditya Birla Capital, our endeavor is to become a preferred financial services brand of choice for all our customers’ needs across their life cycle - a brand that customers will not only just trust but also happily endorse. Keeping this customer insight in mind, we have created a unique strategy & structure to present our spectrum of businesses and offerings under one virtual brand. From a customer perspective, this offers simplicity & convenience. For our employees, we offer a world of growth opportunities across all our financial services offerings. And to our shareholders, this gives the reassurance that we will attract and retain our customers, cost effectively, across their life-cycle needs. </h5> </center>
     </>
   )
}

export default About;
