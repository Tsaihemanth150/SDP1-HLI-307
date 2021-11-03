import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "./p3.jpg";

const Common =(props) => {
   return (
     <>
      <section id="header" className="" >
      <div className="container-fluid ">
      <div className='row'>
          <div className="col-10 mx-auto">
           
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
         <center> <p> 
            {props.name}
             <strong className="bramd-name">
             Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses. As with other types of insurance is risk among many individuals. By estimating the overall risk of health risk and health system expenses over the risk pool, an insurer can develop a routine finance structure, such as a monthly premium or payroll tax, to provide the money to pay for the health care benefits specified in the insurance agreement.The benefit is administered by a central organization, such as a government agency, private business, or not-for-profit entity.
 
 </strong>
          </p> </center>
         <center><img src={web} alt="..." className="col-10 mx-auto"/></center>
          <h5 className="my-3">
          Life insurance (or life assurance, especially in the Commonwealth of Nations) is a contract between an insurance policy holder and an insurer or assurer, where the insurer promises to pay a designated beneficiary a sum of money upon the death of an insured person (often the policy holder). Depending on the contract, other events such as terminal illness or critical illness can also trigger payment. The policy holder typically pays a premium, either regularly or as one lump sum. The benefits may include other expenses, such as funeral expenses.
Life policies are legal contracts and the terms of each contract describe the limitations of the insured events. Often, specific exclusions written into the contract limit the liability of the insurer; common examples include claims relating to suicide, fraud, war, riot, and civil commotion. Difficulties may arise where an event is not clearly defined, for example: the insured knowingly incurred a risk by consenting to an experimental medical procedure or by taking medication resulting in injury or death.         </h5>
          <div classNamemt="my-3">
           <button><NavLink  to={props.visit} className="btn-get-started" to="/service"> 
               MORE DETAILS 
            </NavLink></button> 
          </div>
        </div>
       </div>
       </div>
       <div className="col-lg-6 order-1 or order-lg-2 header-img">
        </div>
       </div>
      </section>
     </>
   )
}

export default Common;
