import React, { useState } from 'react'


const Contact =() => {
  
  
   return (
     <>
     <div className="my-5"> 
     <h1 className="text-center">Contact Us</h1>
     <div className="container contac_div">
       <div className="row">
       <div className="col-mod-6 col-10 mx-auto">
         <form>
         <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"  placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">phone number</label>
  <input type="Numnber" class="form-control" id="exampleFormControlInput1"   onChange={InputEvent} placeholder=""/>
</div>
      
         <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  onChange={InputEvent} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
         </form>
          </div>
       
       
       </div>

     </div>
     
     </div>
     </>
   )
}

export default Contact;
