import './NewUser.css';
import SideBar from './SideBar';
import TopBar from './TopBar';
export default function NewUser() {
  return (
    <><TopBar /><div className='dashboardContainer'>
          <SideBar />
          <div className='newUser'>
              <h1 className='newUserTitle'>New User</h1>
              <form action='' className='newUserForm'>
                  <div className='newUserItem'>
                      <label>Emply_Id</label>
                      <input type='text' placeholder='john' />
                  </div>

                  <div className='newUserItem'>
                      <label>Full Name</label>
                      <input type='text' placeholder='John Smith' />
                  </div>

                  <div className='newUserItem'>
                      <label>Email</label>
                      <input type='email' placeholder='john@gmail.com' />
                  </div>

                  <div className='newUserItem'>
                      <label>Department</label>
                      <input type='Password' placeholder='password' />
                  </div>

                  <div className='newUserItem'>
                      <label>Phone No.</label>
                      <input type='text' placeholder='+1-789-6789' />
                  </div>

                  <div className='newUserItem'>
                      <label>Location</label>
                      <input type='text' placeholder='New York | USA' />
                  </div>

                  <div className='newUserItem'>
                      <label>Gender</label>
                      <div className='newUserGender'>
                          <input type='radio' name='gender' id='male' value='male' /><label for="male">Male</label>
                          <input type='radio' name='gender' id='female' /><label for="female">Female</label>
                      </div>
                  </div>

                  <div className='newUserItem'>
                      <label>Active</label>
                      <select className='newUserSelect' name='active' id='active'>
                          <option value="yes">Yes</option>
                          <option value='no'>No</option>
                      </select>
                  </div>
                  <button className='newUserButton'>Create</button>
              </form>
          </div>
      </div></>
  )
}
