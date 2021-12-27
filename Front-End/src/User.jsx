import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

function User(){
const history = useHistory();
const [userData, setUserData]=useState({});

const callUserPage = async () =>{
  try{
    const res = await fetch('/About',{
      method:"GET",
      headers:{
        Accept:"appllication/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    const data = await res.json();
    console.log(data);
    setUserData(data);

    if(!res.status === 200){
      const error =new Error(res.error);
      throw error;
    }
  }catch(err){
    console.log(err);
    history.push('/User');
  }

}
useEffect(()=>{
  callUserPage();
},[]);
  return (
    <form method="GET">
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">{userData.firstname}</h1>

        <h3>Policy</h3>
        <p></p>
        
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>

        <p>User ID : 123456789</p>
        <p>Name :sai hemanth {userData.firstname}</p>
        <p>email :tsaihemanth15@gmail.com {userData.email} </p>
        <p>phone : 1234567889</p>
        <p>Policy Type:Personal Insurance</p>
        <p>validity:1 year</p>
        <p>Expires on:05/11/2022</p>
        <p>perminum:100000</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div></form>
  );
}

export default User;