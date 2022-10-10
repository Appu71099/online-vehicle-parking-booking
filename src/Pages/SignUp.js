import React from 'react'
import Base from '../Components/Base'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar'
import '../Pages/background.css';

export default function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email:"",
    mobileNumber: "",
    // gender: "",
});


const [Error, setError] = useState({

  first_name_error: "",
  last_name_error: "",
  user_name_error: "",
  password_error: "",
  email_error: "",
  mobile_number_error:"",
  // gender_error: "",
  
});


const [flag, setFlag] = useState({
  firstName:false,
    lastName:false,
    userName:false,
    password:false,
    email:false,
    mobileNumber:false,
    // gender:false,
});


const validateFirstName = (e) => {
  let fname = e.target.value;

  // let firstNameRegex = new RegExp(/^[a-zA-Z ]{2,30}$/);
  if (fname === "") {
      setError({ ...Error, first_name_error: "Please enter First Name" });
      setFlag({ ...flag, firstName: false });

  }
  else {
      setError({ ...Error, first_name_error: "" });
      setFlag({ ...flag, firstName: true });

  }
}



const validateLastName = (e) => {
  let lname = e.target.value;
  // let lastNameRegex = new RegExp(/^[a-zA-Z ]{5,30}$/);
  if (lname === "") {
      setError({ ...Error, last_name_error: "Please enter Last Name" });
      setFlag({ ...flag, lastName: false });
      console.log(flag.lastName);
  }
  else {
      setError({ ...Error, last_name_error: "" });
      setFlag({ ...flag, lastName: true });
      console.log(flag.lastName);

  }
}

const validateUserName = (e) =>{
  let Uname = e.target.value;
  // let userNameRegex = new RegExp(/^[a-zA-Z ]{5,30}$/);
  if (Uname === "") {
      setError({ ...Error, user_name_error: "Please enter User Name" });
      setFlag({ ...flag, userName: false });

  }
  else{
    setError({...Error, user_name_error:" "});
    setFlag({...flag, userName: true});
    console.log(flag.userName);
  }
}


const validateEmail = (e) => {
  let email = e.target.value;
  let emailRegex = new RegExp(/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,4}$/);
  if (emailRegex.test(email) === true) {
      setError({ ...Error, email_error: "" });
      setFlag({ ...flag, email: true });

  }
  else {
      setError({ ...Error, email_error: "Email format should be 'abc@gmail.com' " });
      setFlag({ ...flag, email: false });

  }
}


// const validatePassword = (e) => {
//   let pass = e.target.value;
//   // let passRegex = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,16}$/);
//   if (pass === true) {
//       setError({ ...Error, password_error: "" });
//       setFlag({ ...flag, password: true });

//   }
//   else {
//       setError({ ...Error, password_error: "Password must be alphanumeric and should contains at least a special character with min length 8 and max length 16" });
//       setFlag({ ...flag, password: false });

//   }
// }


const validateMobileNumber = (e) => {
  let mobileNumber = e.target.value;
  let mnRegex = new RegExp(/^[0-9]{10}$/);
  if (mnRegex.test(mobileNumber) === true) {
      setError({ ...Error, mobile_number_error: "" });
      setFlag({ ...flag, mobileNumber: true });

  }
  else {
      setError({ ...Error, mobile_number_error: "Mobile Number should be 10 digits without +91 or 0" });
      setFlag({ ...flag, mobileNumber: false });

  }
}


const changeHandler = (e) => {

  setData((data) => ({
      ...data,
     
      [e.target.name]: e.target.value,
    
  }));
  console.log(e.target.name + " " + e.target.value)
}
const refreshPage = (e) => {
  window.location.reload();
};

// useEffect(() => {
//   fetch("http://localhost:8080/allstates")
//       .then(r => r.json())
//       .then(d => setData({ ...data, state: d }))
//   // console.log(data.state)
// }, []);


const submitData = (e) => {
  e.preventDefault();
  // if (flag.firstName && flag.lastName &&flag.userName &&
  //    flag.email && flag.mobileNumber ) {
      const reqOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({

              firstName: data.firstName,
              lastName: data.lastName,
              userName: data.userName,
              password: data.password,
              email:data.email,
              mobileNumber: data.mobileNumber,
              
            
          })
      }
      fetch("http://localhost:9009/saveUser", reqOptions)
          .then(resp => resp.text())
          .then(data => {
              if (data.length !== 0) {
                  alert("New User added successfully!!!");
                  navigate('/login');
              }
              else {
                  alert("Failed!!!");
                  navigate('/Signup');
                  //window.location.reload();
              }
          })
  // }
  // else {
  //     alert("All fields are compulsory and must follow guidelines");
  //     // window.location.reload();
  //     navigate('/Signup');
  // }

}


  return (
    <div>
      <Base />

      <div className="container mt-5 col-8">
      <h3 ><strong>Sign Up</strong></h3>
      <form method="POST">
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="firstName" 
            value={data.firstName} onChange={changeHandler} 
            onBlur={validateFirstName}
          />
          <span className="text text-danger">{Error.first_name_error}</span>
        </div>


        <div className="mb-3" >
          <label>Last name</label>
          <input 
          type="text" 
          className="form-control"
          placeholder="Last name" 
          name="lastName" 
          value={data.lastName} onChange={changeHandler}   onBlur={validateLastName}/>
          <span className="text text-danger">{Error.last_name_error}</span>
        </div>


        <div className="mb-3" >
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            name="userName" 
            value={data.userName} onChange={changeHandler} 
            onBlur={validateUserName}
          />
           <span className="text text-danger">{Error.user_name_error}</span>
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
          {/* <span className="text text-danger">{Error.password_error}</span> */}
        </div>


        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={data.email} onChange={changeHandler} 
            onBlur={validateEmail}
            required
          />
           <span className="text text-danger">{Error.email_error}</span>
          </div>
          {/* <span className="text text-danger">{Error.first_name_error}</span> */}
          <div className="mb-3">
          <label>Contact Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Contact Number"
            name="mobileNumber"
            value={data.mobileNumber} onChange={changeHandler} 
            onBlur={validateMobileNumber}
            required
          />
           <span className="text text-danger">{Error.mobile_number_error}</span>
          </div>


          {/* <div style={{ marginTop: '10px' }} className="form-group" onChange={changeHandler}>
                                <label><b>  Gender: </b></label>
                                <input style={{ marginLeft: '10px' }} type="radio" value="Male" name="gender" /> Male
                                <input style={{ marginLeft: '10px' }} type="radio" value="Female" name="gender" /> Female
                                <input style={{ marginLeft: '10px' }} type="radio" value="Other" name="gender" /> Other
                            </div> */}
        


        <div className="d-grid col-2">
          <button type="submit" className="btn btn-success" onClick={submitData}> Sign Up</button>
          <button type="button" className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={refreshPage}>Reset</button>
        </div>
        {/* <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p> */}
      </form>
      </div>
      
    </div>

  )
}
