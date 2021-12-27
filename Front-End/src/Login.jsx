import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import background  from "./test2.jpg";

function Login() {
  const history = useHistory();
  const [Email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();
    const res = await fetch('/Login',{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email,
        password
        
      })
      
    })
   const data = res.json();
   if(res.status === 400 || !data ){
     window.alert("Invalid credential")
   }else{
    window.alert("login successful")
     history.push("/User");
   }

  }
    return (
    <div><div style={{ backgroundImage: `url(${background})` }}>
      <h1 className="text-center mt-10">Log in</h1>

      <div className="container">
        <form method="POST">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              value={Email}
              onChange={(e)=> setEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="text-center">
            <button type="submit" class="btn btn-primary  m-4" value="LogIn" onClick={loginUser}>
              Login
            </button>
          </div>
          
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;