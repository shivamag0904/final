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
import React,{useState, useEffect} from 'react';
import { Outlet, Link , useNavigate} from "react-router-dom";
import Axios from "axios";
import HomeDashboard from "./HomeDashboard";
import Home from "./Home";

// import Dashboard from './Dashboard';
const Login = () => {

    const navigate = useNavigate();
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('')
    // const [role, setRole] = useState('');
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

    const loginUser = async(e) =>{
    
        e.preventDefault();
        
        const res = await fetch('/signin',{

            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }).then(res=> res.json())
        .then(result=>  {if(result.status === 400 ){
          window.alert("Invalid Credentials");
      }else{
          window.alert("Login Successfull");
         if(result.role === "user") 
         
         {
          navigate('/UserDashboard');

        } 
         else{
          navigate('/HomeDashboard');


         }        
         
      }
      // console.log(result)
    });
        
        // const data = res.json();
        
    }
  return <>
  <div className='container my-5 rounded p-3' style={{width:"400px",backgroundColor:"grey"}} >
  <form method='POST'>
 
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} onChange ={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={password} onChange ={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember Password</label>
        </div>
        <div  className='my-2 text-secondary' ><Link to="/register">Sign Up</Link></div>
        <Link style={{textDecoration:'none'}} to="/dashboard"><button
                    className="btn btn-outline-primary ml-3"
                    type="submit" onClick={loginUser} >
                   Submit 
                  </button></Link>
                  <Link to="/otpform"><button type="button" className="btn btn-danger">Forgot Password?</button></Link>
                  {/* <button
        type="button"
        onClick={() => setRole("admin")}
      >admin</button> */}
      </form>
  </div>
  <div className='container'>
  {/* {role==="admin" && <Home/>} */}
  </div>
  <Outlet/>
    
  </>;
};

export default Login;