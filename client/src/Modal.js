import React from 'react'

const Modal = ({onClose, results, data}) => {
  return (
    <>
     
     <div className='container'>
     <div className='modal-active'>
      <div className='modal-background' onClick={onClose}></div>
      <div className='modal-card'>
          <header className='modal-card-head'>
              <p className='modal-card-title'>Your Answers</p>
              <button className=' delete' onClick={onClose}></button>
          </header>
          <section className='modal-card-body content'>
            <ul>
              {
                results.map((result,i) =>(
                  <li key={i} className="mb-6">
                    <p> <strong>{result.q}</strong></p>
                    <p className={result.a === data[i].answer? 'bg-success text-white p-2':'bg-danger text-white p-2'}>Your answer: {result.a}</p>
                    {result.a !== data[i].answer && <p className=" bg-info text-white p-2">Correct Answers: {data[i].answer}</p>}
                  </li>
                ))
              }
            </ul>
          </section>
      </div>
     </div>
     </div>
        {/* <div className='container'>
        <div className="modal" tabIndex={-1}>
        <div className="modal-dialog" onClick={onClose}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Your answers</h5>
              <button className=' delete' onClick={onClose}></button>
                          </div>
            <div className="modal-body">
              <ul>
                {
                  results.map((result,i)=>(
                    <li key={i} className="mb-6">
                      <p><strong> {result.q}</strong></p>
                      <p className={result.a === data[i].answer ? 'bg-success text-white p-2':'bg-danger text-white p-2'}>Your answer: {result.a}</p>
                      {result.a !==  data[i].answer && <p className='bg-link text-white p-2'>Correct Answers:{data[i].answer}</p>}
                    </li>
                  ))
                }
              </ul>
            </div>
            
          </div>
        </div>
      </div>

        </div> */}
    </>
  )
}

export default Modal