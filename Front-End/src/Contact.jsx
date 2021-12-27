import React from 'react'
import background  from "./test2.jpg";



const Contact =() => {
  
  
   return (
     <>
     <div style={{ backgroundImage: `url(${background})` }}>
     <div className="my-10"> 
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
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<div class="col-12">
   <center><button class="btn btn-primary" type="submit">Submit form</button></center> 
  </div>
         </form>
          </div>
         
       
       </div>

     </div>
     
     </div>
     </div>
     </>
   )
}

export default Contact;