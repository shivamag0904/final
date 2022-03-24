// import React,{useEffect, useState} from 'react';
// import {formatTime}  from './utils/index'

// const End = ({ results, data, onReset, onAnswersCheck,time}) => {
//     const [correctAnswers, setCorrectAnswers] = useState(0);

//     useEffect(() =>{
//         let correct =0;
//         results.forEach((result,index)=>{
//             if(result.a === data[index].answer){
//                 correct++;
//             }
//         });
//         setCorrectAnswers(correct);
//     },[])
//   return (
//     <>
//     <div className='container'>
//     <div className='card text-center mx-auto shadow-lg p-2' style={{width:"45rem"}}>
//             <div className='card-content'>
//                 <div className='content'>
//                     <h3>Your results</h3>
//                     <p> {correctAnswers}of {data.length} </p>
//                     <p> <strong>{Math.floor((correctAnswers/data.length)*100)}%</strong></p>   
//                     <p> <strong>Your time: </strong> {formatTime(time)}</p>   
//                     <button  className=' btn btn-info mx-2' onClick={onAnswersCheck}>Check your answers</button>
//                     <button  className=' btn btn-success ' onclick={onReset}>Try again</button>

//                 </div>
//             </div>
//         </div>
//     </div>
        
//     </>
//   )
// }

// export default End


import React,{useEffect, useState} from 'react';
import {formatTime}  from './utils/index'

const End = ({ results, data, onReset, onAnswersCheck,time}) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() =>{
        let correct =0;
        results.forEach((result,index)=>{
            if(result.a === data[index].answer){
                correct++;
            }
        });
        setCorrectAnswers(correct);
    },[])
  return (
    <>
    <div className='container'>
    <div className='card text-center'>
            <div className='card-content'>
                <div className='content'>
                    <h3>Your results</h3>
                    <p> {correctAnswers}of {data.length} </p>
                    <p> <strong>{Math.floor((correctAnswers/data.length)*100)}%</strong></p>   
                    <p> <strong>Your time: </strong> {formatTime(time)}</p>   
                    <button  className=' btn btn-info mx-2' onClick={onAnswersCheck}>Check your answers</button>
                    <button  className=' btn btn-success ' onclick={onReset}>Try again</button>

                </div>
            </div>
        </div>
    </div>
    <div className='container'>
    <table className="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Username</th>
            <th scope="col">Course</th>
            
            <th scope='col'>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>User</td>
            <td>Advanced Product Quality Planning</td>
            
            
            <td><p> {correctAnswers}of {data.length} </p></td>
          </tr>
          {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Statistical Process Control Training -SPC</td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry </td>
            <td >Advanced GD&T Training Course </td>

            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry </td>
            <td >Advanced GD&T Training Course </td>

            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry </td>
            <td >Advanced GD&T Training Course </td>

             </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry </td>
            <td >Advanced GD&T Training Course </td>

             </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry </td>
            <td >Advanced GD&T Training Course </td>

              </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry </td>
            <td >Advanced GD&T Training Course </td>

            </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry </td>
            <td >Advanced GD&T Training Course </td>

          </tr> */}
        </tbody>
      </table>
    </div>
        
    </>
  )
}

export default End