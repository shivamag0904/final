import React from 'react'
import FeaturedInfo from './FeaturedInfo';
import WidgetLarge from './WidgetLarge';
import WidgetSmall from './WidgetSmall';
import './HomeDashboard.css';
import Topbar2 from './Topbar2';
import './app1.css';
import SideBar from './SideBar';
export default function UserDashboard() {
  
  return (
    <>
<Topbar2 
/>
<div className='dashboardContainer'>
<SideBar/>
    <div className='dashboardHome'>
      <FeaturedInfo/>
      <div className='dashboardWidgets'>
          {/* <WidgetSmall/> */}
          <WidgetLarge/>
      </div>
    </div>
    </div>
    </>
  )
}