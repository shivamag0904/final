import React from 'react'
import Modal from 'react-modal';
import Calender from './Calender';
import SideBar from './SideBar';
import TopBar from './TopBar';

// Modal.setAppElement('#root');
const AddCalender = () => {
  return (
    <>
     <TopBar />
        <div className='dashboardContainer'>
            <SideBar />
            <div className='courseList'>
     <Calender/>
     </div>
   </div>
    </>
  )
}

export default AddCalender
