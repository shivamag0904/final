import React from 'react'
// import 'bulma/css/bulma.min.css';

const Start = ({onQuizStart}) => {
  return (
    <>
    <div className='container '>
    <div className="card text-center mx-auto shadow-lg bg-white rounded" style={{width:"45rem"}}>
        <div className='card-header'><h3>Start the quiz</h3></div>
        <div className="card-body">
          
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <button type='button'  className='btn btn-info'
          onClick={onQuizStart}>Start</button>
          
        </div>
      </div>
    </div>
     
        
    </>
  )
}

export default Start