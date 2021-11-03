import React from 'react'
import Common from './Common';
import web from "./p1.jpg";
import web1 from "./h3.jpg";
import web2 from "./h1.jpg";

const Service =() => {
   return (
     <> 
    <center> <div className="my-5">
       <h1 className='text-left'>Our Services</h1>
       </div>
       <div className="container-fulid nav-bg">
       <div className="row">
        <div className="col-10 mux-auto">
          <div className='row'>
            <div className='col-md-4 mx-auto'>
            <div class="card">
  <img src={web} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Health Insurance</h5>
    <p class="card-text">We are we are providing a wide variety of Health Insurance to our customers which will be varies according to the need of customer</p>
    <a href="#" class="btn btn-primary">See Plans</a>
  </div>

</div>

<div class="card">
  <img src={web1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Life Insurance</h5>
    <p class="card-text">We are we are providing a wide variety of Life Insurance to our customers which will be varies according to the need of customer</p>
    <a href="#" class="btn btn-primary">See Plans</a>
  </div>
</div> 
            </div>
          </div>
        </div>
        </div>
        </div></center>  <img src={web2} className="col-10 mx-auto" alt="..."/>
     </>
   )
}

export default Service;
