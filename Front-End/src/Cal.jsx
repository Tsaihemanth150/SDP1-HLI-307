import React, { useState } from 'react'
import reactDom from 'react-dom';
import { NavLink } from 'react-router-dom';
import background from "./test2.jpg";
import web from "./i1.jpg";


const Cal =() => {
const [number1,setNumber1]=useState();
const [number2,setNumber2]=useState();
const [number3,setNumber3]=useState();
const [number4,setNumber4]=useState();
const [number5,setNumber5]=useState();
const [total,setTotal]=useState((number4/number3*number1)+(number4/number3*number2));

function amount (){
   setTotal((number4/number3*number1)+(number4/number3*number2));
}
   return (
       <>
       <div style={{ backgroundImage: `url(${background})` }}>
       
<center>
   <p>Insurance premium refers to a specific amount to be paid periodically by the insured individual to maintain their insurance coverage, as calculated by the insurance company. For deciding the premium amount, an insurance company examines the type of coverage being opted, the policyholder lifestyle and health conditions, and the likelihood of a claim being made, among other factors.

For the purpose of accurate analysis of a person’s life and premium calculation, insurance companies employ actuaries. They are responsible for analyzing the risks associated with an event or claim, and then greater the risk, higher will be the insurance premium. </p>
<img src={web} alt="..." className="col-5 mx-auto"/>
<h2><b>Insurance premium calculator</b></h2>
 <div class="col-3">
  <div class="col">
    <input type="number" class="form-control" placeholder="Number of Adult" aria-label="Number of Adult" value={number1} onChange={e=>setNumber1(e.target.value)} />
  </div>
  <div class="col">
    <input type="number" class="form-control" placeholder="Number of Children" aria-label="Number of Children" value={number2} onChange={e=>setNumber2(e.target.value)} />
  </div>
  <div class="col">
    <input type="number" class="form-control" placeholder="Tenure" aria-label="Tenure" value={number3} onChange={e=>setNumber3(e.target.value)} />
  </div>
  <div class="col">
    <input type="number" class="form-control" placeholder="Amount in Lakhs" aria-label="Amount in Lakhs" value={number4} onChange={e=>setNumber4(e.target.value)}  />
  </div>
</div>


<h2>Net Insurance Premium={total} per month</h2>

<div>

<button type="button" class="btn btn-success" onClick={amount}>Calculate</button>
</div>
</center>








       </div>
        </>
   )
}

export default Cal;