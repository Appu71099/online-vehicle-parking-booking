import React from 'react'
import Base from '../Components/Base'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Pages/background.css';
// import ViewLocation from './ViewLocation';


export default function Login() {

  const navigate = useNavigate();
  
    const [data, setData] = useState({
             username: "",
             password: "",
             loginerror: ""
    });

    const changeHandler = (e) => {
      setData((data) => ({
          ...data,
          [e.target.name]: e.target.value
      }));
  }


  

  const submitData = (e) => {
    if (data.username === '') {
        alert('Username cannot be null');
        return;
    }
    if (data.password === '') {
        alert('Password cannot be null');
        return;
    }
    e.preventDefault();
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: data.username,
            password: data.password
        })
    }
    fetch("http://localhost:9009/logincheck", reqOptions)
        .then(resp => resp.text())
        .then(data => {
          console.log(data);
            if (data.length !== 0) {
                const json = JSON.parse(data);
                if (json.login_id.role === "user") {
                    sessionStorage.setItem("user", JSON.stringify(json))
                    sessionStorage.setItem("loggedInUser", "user")
                    // console.log(data);
                    navigate('/ViewLocation');
                }
                // alert("Login is Succesfully");
              }
                else {
                  //setData({loginerror:"Wrong Username or Password (or account may be disabled)! Try Again..."})
                  alert("Wrong Username or Password Try Again...");
              }
          
                })

  }



  return (
    <div>
        <Base>
        <div className="mt-5">
      <div className=" container col-sm-6"><h2 className="" style={{ color:"rgba(23, 108, 110, 0.8)"}}>24/7 Parking Service Available Hear......<br /> <label>SignIn to know More</label></h2></div>
      </div>
        
        <div className="container mt-5 col-6">
        <h3>Sign In</h3>
        <form>
        
        <div className="mb-3">
          <label>User Name</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter User Name"
            name="username"
            value={data.username} onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={data.password} onChange={changeHandler} 
          />
        </div>
      
        <div className="d-grid col-2">
          <button type="submit" className="btn btn-success" onClick={submitData} >
            Login
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
      </div>
    
      </Base>

<div className="mt-5">
      <div className=" container col-sm-6"><p className="" style={{ color:"red"}}> <strong>If Not Registered Please SignUp.........</strong></p></div>
      </div>
    </div>
  )
}
