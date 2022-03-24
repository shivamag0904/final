import React, { useEffect, useState } from "react";
import { getSingleFiles, getMultipleFiles } from "./data/api";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import FileUploadScreen from "./screens/FileUploadScreen";
// import "./App.css";

function UploadFile() {
   const [singleFiles, setSingleFiles] = useState([]);
 // const [multipleFiles, setMultipleFiles] = useState([]);

  const getSingleFilesList = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };

  // const getMultipleFilesList = async () => {
  //   try {
  //     const fileslist = await getMultipleFiles();
  //     setMultipleFiles(fileslist);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
     getSingleFilesList();
   // getMultipleFilesList();
  }, []);
  return (
    <>
     {/* <TopBar />
     <div className='dashboardContainer'>
          <SideBar />
          <div className='newCourse'>
              <h1 className='newCourseTitle'>New Course</h1>
              <form className='newCourseForm'>
                  <div className='newCourseItem'>
                      <label>Course Name</label>
                      <input type='text' placeholder='coursename...' />
                  </div>
                  <div className='newCourseItem'>
                      <label>Category</label>
                      <input type='text' placeholder='Category...' />
                  </div>

                  <div className='newCourseItem'>
                      <label>Duration</label>
                      <input type='time' placeholder='Duration...' />
                  </div>

                  <div className='newCourseItem'>
                      <label>Rating</label>
                      <input type='number' min="0" max="5" placeholder='Rating...' />
                  </div>
    */}
        <FileUploadScreen getSingle={() => getSingleFilesList()} />
      {/* <div className="container-fluid mt-5">
        <div className="row"> */}
          {/* <div className="col-6">
            <h4 className="text-success font-weight-bold">Single File List</h4>
            <div className="row">
              {singleFiles.map((file, index) => (
                <div className="col-6">
                  <div className="card mb-2 border-0 p-0">
                    <img
                      src={`http://localhost:8080/${file.filePath}`}
                      height="200"
                      alt="img"
                      className="card-img-top img-responsive"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          {/* <div className="col">
             <div className="card" style={{width: '18rem'}}>
            {multipleFiles.map((element, index) =>
              <div key={element._id}> 
             <div className="row">
                  {element.files.map((file, index) => (
                        <img
                          src={'../Images/document.png'}
                          height="200"
                          alt="img"
                          className="card-img-top img-responsive"
                        />
                  ))}
                </div>
              
                <div className="card-body">
          <h5 className="card-title">  {element.coursename}</h5>
          <h5 className="card-title">  {element.category}</h5> */}
          {/* <p className="card-text">Some quick example text to build on the Course title and make up the bulk of the card's content.</p>
          <Link   to="/course1">Course2</Link> */}
          {/* <div className="card-footer mt-2">
            <div className="title">
              <span>Rating : {element.rating} </span>
              <span className="float-end">Duration : {element.duration}</span>
              </div>
              </div>
              </div>
               
              </div>
            )}
            </div>
          </div>
          </div>
        </div> */}
      {/* </form>
      </div>
      </div> */}
    </>
  );
}

export default UploadFile;
