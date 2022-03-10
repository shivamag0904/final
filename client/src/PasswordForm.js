// import React from 'react';
// import { Outlet, Link } from "react-router-dom";
// import Navbar from './Navbar';
// const Login = () => {

//   return(
//   <>
//    <Navbar/>
//   <div className='container my-5 rounded p-3' style={{width:"400px",backgroundColor:"lightgrey"}}>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1" />
//         </div>
//         <div className="mb-3 form-check">
//           <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//           <label className="form-check-label" htmlFor="exampleCheck1">Remember Password</label>
//         </div>
//         <Link style={{textDecoration:'none'}} to="/HomeDashboard"> <button type="submit" className="btn btn-primary"> Submit </button></Link>
//         <Link style={{textDecoration:'none'}} to="/register"> <button type="submit" className="btn btn-primary"> Create An Account </button></Link>
//       </form>
//       <Outlet/>
//   </div>;
//   </>
//   )
// };

// export default Login;
import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import HomeDashboard from "./HomeDashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import axios from "axios";
// import Dashboard from './Dashboard';
const PasswordForm = (props) => {
  const navigate = useNavigate()
  const [inputField, setInputField] = useState({
    otpCode: '',
    password: '',
  })
  const [errField, setErrField] = useState({
    otpCodeErr: '',
    passwordErr: '',
  })

  const validFrom = () => {
    let formIsValid = true;
    setErrField({
      otpCodeErr: '',
      passwordErr: '',
    })

    if (inputField.otpCode === '') {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        otpCodeErr: "Please Enter Email",
      }));
    }
    if (inputField.password === '') {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password",
      }));
    }
    return formIsValid;
  };

  const inputHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  // const [role, setRole] = useState(" admin");
  // Axios.defaults.withCredentials = true;

  // useEffect(()=>{
  //   Axios.get("http://localhost:3000/login".then((response)=>{
  //     if(response.data.loggedIn === true){
  //       setRole(response.data.user[0].role);
  //       console.log(response.data);
  //     }
  //   }));

  // },[]);

  const loginUser = async () => {
    if (validFrom()) {
      console.log(inputField,props);
      let url = "http://localhost:8080/change-password"
      let options = {
        method: "POST",
        url: url,
        Headers: {},
        data: inputField,
      }
      try {
        let response = await axios(options);
        console.log(response);
        if (response.data.statusText === "Success") {
          toast.success("Login Successfull");
          localStorage.setItem("token", response.data.token);
          setTimeout(() => {
            navigate("/HomeDashboard");
          }, 1500);
        } else {
          toast.error(response.data.message);
        }
      } catch (e) {
        toast.error("something went wrong!");
      }
    } else {
      toast.error("Form Invalid!");
    }
  };

  const changePassword = async () => {
    navigate("/reset-password");
  };
  return (
    <>
      <div
        className="container my-5 rounded p-3"
        style={{ width: "400px", backgroundColor: "grey" }}
      >
        <form method="POST">
          <ToastContainer />
          <div className="header ">
            {/* <Link  to='/HomeDashboard'>User</Link>
    <Link to='/course1'>admin</Link> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Otp Code
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              name="otpCode"
              maxLength="4"
              value={inputField.otpCode}
              onChange={inputHandler}
              aria-describedby="emailHelp"
            />
            {errField.otpCodeErr.length > 0 && 
              <span className="error">{errField.otpCodeErr}</span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={inputField.password}
              onChange={inputHandler}
              id="exampleInputPassword1"
            />
            {errField.passwordErr.length > 0 && 
              <span className="error">{errField.passwordErr}</span>
            }
            {/* <span className="btn btn-danger" onClick={changePassword}>
              Forget Password ?
            </span> */}
          </div>

          <div className="my-2 text-secondary">
            <Link to="/register">Sign Up</Link>
          </div>
            <button
              className="btn btn-outline-primary ml-3"
              type="submit"
              onClick={loginUser}
            >
              Change Password
            </button>
          {/* <Link to="/otpform"><button type="button" className="btn btn-danger">Forgot Password?</button></Link> */}
          {/* <button
        type="button"
        onClick={() => setRole("admin")}
      >admin</button> */}
        </form>
      </div>
      <div className="container">{/* {role==="admin" && <Home/>} */}</div>
      <Outlet />
    </>
  );
};

export default PasswordForm;
