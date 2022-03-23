
import React,{useState,useEffect, useRef} from 'react'
import './topBar.css';
import { Link } from 'react-router-dom';
export default function TopBar() {
//   const [username,setUsername] = useState('');
//   const get_id = useRef(null);
//   async function getdatabyid(){
//     const id= get_id.current.value;
//     if(id){
//       try{
//         const res = await fetch(`signin/${id}`);
//         if(!res.ok){
//           const message = `An error has occured: ${res.status} - ${res.statusText}`;
//           throw new Error(message);
//         }
//         const data = await res.json();
//         const result ={
//           data: data,
//           status: res.status,
//           statusText: res.statusText,
//           headers: {
//             "Content-Type": res.headers.get("Content-Type"),
//             "Content-Length": res.headers.get("Content-Length"),
//           },
//         };
//       }
//       catch(err){
//         console.log(err);
//       }
//     }
//   }
//   useEffect(()=>{

//     fetch('signin',{
//         method:"GET",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         credentials: "include"
//     }).then((res)=>{

       
        
//     }).catch((err)=>{
//         console.log(err);
//     });
// });
// fetch('/signin',{
//           method:"GET",
//           headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json"
//           },
//           credentials: "include"
//       }).then((result)=>{
//   result.json().then((res)=>{
//     console.log(res);
//   })
// })
const [data,setData] = useState([]);
useEffect(()=>{
  fetch('/register',{
              method:"GET",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
              },
            }).then((result)=>{
    result.json().then((res)=>{
      // console.log(res);
      setData(res);
    })
  })
},[])
console.log(data);
  return (
  <div className='topbar'>
    <div className='topbarwrapper'>
      <div className='topLeft'>
        <span className='logo'>TetraLMS</span>
      </div>
      <div className='topRight'>
        <div className='topbarIcons'>
        <div className='topbarIconContainer'>
        <i class="fas fa-bell"></i>
        <span className='topIconBag'>2</span>
        </div>
        </div>

        <div className='topbarIcons'>
        <div className='topbarIconContainer'>
        <i class="fas fa-cog"></i>
        </div>
        </div>

        <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
       <i className='fas fa-user'></i>
        </a>
        
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a  className="dropdown-item" href="#" >user</a></li>
          <li><a className="dropdown-item" href="#">My courses</a></li>
          <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
        </ul>
        
        
      </div>
             
      </div>
    </div>
  </div>
  )
}
