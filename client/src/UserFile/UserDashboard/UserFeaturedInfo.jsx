import React, { useEffect, useState } from "react";
import './FeaturedInfo.css';
import { getSingleFiles, getMultipleFiles } from "./data/api";
export default function FeaturedInfo() {

    const [SingleFiles, setSingleFiles] = useState([]);

    const getSingleFilesList = async () => {
      try {
        const fileslist = await getSingleFiles();
        setSingleFiles(fileslist);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getSingleFilesList();
      //getMultipleFilesList();
    }, []);
   

  return (
    <div className='featured'>
    <div className='featuredItem'>
        <span className='featuredTitle'>Recommended Courses</span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>{SingleFiles.length}</span>
            <span className='featuredPhoto'> <i className="fas fa-graduation-cap featuredIcon"/> </span>
        </div>
    </div>

    <div className='featuredItem'>
        <span className='featuredTitle'>Sessions Completed</span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>12</span>
            <span className='featuredPhoto'> <i className="fas fa-graduation-cap featuredIcon"/> </span>
        </div>
    </div>

    <div className='featuredItem'>
        <span className='featuredTitle'>Course Duration (in Hours)</span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>203</span>
            <span className='featuredPhoto'> <i className="fas fa-user featuredIcon"/> </span>
        </div>
    </div>
      

    {/* <div className='featuredItem'>
        <span className='featuredTitle'></span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>23</span>
            <span className='featuredPhoto'> <i className="fas fa-trophy featuredIcon"/> </span>
        </div>
    </div>
       */}

    {/* <div className='featuredItem'>
        <span className='featuredTitle'>Total Time Spent</span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>23</span>
            <span className='featuredPhoto'> <i class="fas fa-user-clock featuredIcon"></i> </span>
        </div>
    </div> */}
      
    <div className='featuredItem'>
        <span className='featuredTitle'>Total Skill Level (in marks)</span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>3</span>
            <span className='featuredPhoto'> <i class="fas fa-user-clock featuredIcon"></i> </span>
        </div>
    </div>
    </div>
  )
}
