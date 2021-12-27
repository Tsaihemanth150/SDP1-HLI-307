import React from 'react'
import web from "./p1.jpg";
import web1 from "./h3.jpg";
import background  from "./test2.jpg";


const Service =() => {
   return (
     <> <div style={{ backgroundImage: `url(${background})` }}>
    <center> <div className="my-10">
       <h1 className='text-left'>Our Services</h1>
       </div>
       <div className="container-fulid nav-bg">
       <div className="row">
        <div className="col-20 mux-auto">
          <div className='row'>
            <div className='col-md-5 mx-auto'>
            <div class="card">
  <img src={web} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Health Insurance</h5>
    <p class="card-text">We are we are providing a wide variety of Health Insurance to our customers which will be varies according to the need of customer</p>
    <a href="/Health" class="btn btn-primary">See Plans</a>
  </div>

</div>

<div class="card">
  <img src={web1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Life Insurance</h5>
    <p class="card-text">We are we are providing a wide variety of Life Insurance to our customers which will be varies according to the need of customer</p>
    <a href="/Life" class="btn btn-primary">See Plans</a>
  </div>
</div> 
            </div>
          </div>
        </div>
        </div>
        </div></center> 
        </div>
     </>
   )
}

export default Service;