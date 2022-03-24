import "./User.css";
import TopBar from './TopBar';
import SideBar from './SideBar';
import './app1.css';
import { Link } from "react-router-dom";
export default function User() {
  return (<>
  <TopBar />
  <div className='dashboardContainer'>
      <SideBar />
      <div className="user">
          {/* <div className="userTitleContainer">
              <h1 className="userTitle">Edit User</h1>
            <Link to='/newuser'><button className="userAddButton">Create</button></Link>
          </div> */}

          <div className="userContainer">
              <div className="userShow">
                  <div className="userShowTop">
                      <img src="./img/p1.jpg" alt="" className="userShowImg" />
                      <div className="userShowTopTitle">
                          <span className="userShowUsername">Anna keller</span>
                          <span className="userShowUserTitle">Software Eng</span>
                      </div>
                  </div>

                  <div className="userShowBottom">
                      <span className="userShowTitle">Account Details</span>
                      <div className="userShowInfo">
                          <i className="far fa-user userShowIcon" />
                          <span className="userShowInfoTitle">annabeck99</span>
                      </div>

                      <div className="userShowInfo">
                          <i className="fas fa-calendar-day userShowIcon" />
                          <span className="userShowInfoTitle">10-12-1999</span>
                      </div>
                      <span className="userShowTitle">Contact Details</span>
                      <div className="userShowInfo">
                          <i className="fas fa-phone-square-alt userShowIcon" />
                          <span className="userShowInfoTitle">+9119018440</span>
                      </div>

                      <div className="userShowInfo">
                          <i className="fas fa-envelope userShowIcon" />
                          <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                      </div>

                      <div className="userShowInfo">
                          <i className="fas fa-map-marker-alt userShowIcon" />
                          <span className="userShowInfoTitle">New York | USA</span>
                      </div>
                  </div>
              </div>
              <div className="userUpdate">
                  <span className="userUpdateTitle">Edit</span>
                  <form className="userUpdateForm">
                      <div className="userUpdateLeft">
                          <div className="userUpdateItem">
                              <label>Fullname</label>
                              <input
                                  type="text"
                                  placeholder="annnabell99"
                                  className="userUpdateInput" />
                          </div>

                          <div className="userUpdateItem">
                              <label>Full Name</label>
                              <input
                                  type="text"
                                  placeholder="annna bell"
                                  className="userUpdateInput" />
                          </div>

                          <div className="userUpdateItem">
                              <label>Email</label>
                              <input
                                  type="text"
                                  placeholder="annnabell99@gmail.com"
                                  className="userUpdateInput" />
                          </div>

                          <div className="userUpdateItem">
                              <label>Phone No.</label>
                              <input
                                  type="text"
                                  placeholder="+1-789-234"
                                  className="userUpdateInput" />
                          </div>

                          <div className="userUpdateItem">
                              <label>Address</label>
                              <input
                                  type="text"
                                  placeholder="New York | USA"
                                  className="userUpdateInput" />
                          </div>
                      </div>
                      <div className="userUpdateRight">
                          <div className="userUpdateUpload">
                              <img src="./img/p1.jpg" alt="" className="userUpdateImg" />
                              <label htmlFor="file">
                                  <i className="fas fa-upload userUpdateIcon" />
                              </label>
                              <input type="file" id="file" style={{ display: "none" }} />
                          </div>
                          <button className="userUpdateButton">Update</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div></>
  );
}
