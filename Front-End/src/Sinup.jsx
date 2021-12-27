import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import background  from "./test2.jpg";

function Signup() {
  const history = useHistory();
  const [user, setUser] = useState({
    firstname: "",
    lastname:"",
    Email: "",
    password: "",
    cpass: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { firstname, lastname, Email,  password, cpass } = user;

    const res = await fetch("/Sinup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        Email,
        password,
        cpass,
      })
    });

    const data = await res.json();

    console.log(data);
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("registeration successful");

      history.push("/Login");
    }
  };
  return (
    <div>
      <div style={{ backgroundImage: `url(${background})` }}>
      <h1 className="text-center mt-10">Sign Up</h1>

      <div className="container">
        <form method="POST">
          <div class="form-group">
            <label for="exampleInputPassword1">First Name</label>
            <input
              type="text"
              name="firstname"
              class="form-control"
              id="exampleInputPassword1"
              value={user.firstname}
              onChange={handleInputs}
              placeholder="Your Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Last Name</label>
            <input
              type="text"
              name="lastname"
              class="form-control"
              id="exampleInputPassword1"
              value={user.lastname}
              onChange={handleInputs}
              placeholder="Last Name"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="Email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.Email}
              onChange={handleInputs}
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              id="exampleInputPassword1"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              name="cpass"
              class="form-control"
              id="exampleInputPassword1"
              value={user.cpass}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
       
         
          <div className="text-center">
            <button
              type="submit"
              onClick={postData}
              class="btn btn-primary  m-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;