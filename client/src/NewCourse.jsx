import './NewCourse.css';
import SideBar from './SideBar';
import TopBar from './TopBar';
export default function NewCourse() {
  return (
    <><TopBar /><div className='dashboardContainer'>
          <SideBar />
          <div className='newCourse'>
              <h1 className='newCourseTitle'>New Course</h1>
              <form action='' className='newCourseForm'>
                  <div className='newCourseItem'>
                      <label>Course Name</label>
                      <input type='text' placeholder='Course Name' />
                  </div>

                  <div className='newCourseItem'>
                      <label>Category</label>
                      <input type='text' placeholder='Category' />
                  </div>

                  <div className='newCourseItem'>
                      <label>Description</label>
                      <input type='text' placeholder='Duration..' />
                  </div>

                  {/* <div className='newCourseItem'>
                      <label>Rating</label>
                      <input type='Password' placeholder='Rating...' />
                  </div> */}

                  <button className='newCourseButton'>Create</button>
              </form>
          </div>
      </div></>
  )
}
