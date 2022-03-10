import React,{useState, useEffect, useRef} from 'react'

const Question = ({ data, onAnswerUpdate , numberofQuestions , activeQuestion , onSetActiveQuestion , onSetStep}) => {
   const [selected , setSelected] = useState('');
   const [error, setError] = useState('');
   const radiosWrapper = useRef();
   

//    useEffect(() =>{

//     const findCheckedInput = radiosWrapper.current.querySelector('input : checked');
//     if(findCheckedInput ){
//     findCheckedInput.checked = false;
//     }
//    },[data]);
   
   const changeHandler =(e) =>{
       setSelected(e.target.value);
   }
    
    const nextClickHandler =(e) =>{

        if (selected === '')
        {
            return setError('Please select one option');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected}]);
        setSelected('');
        if(activeQuestion < numberofQuestions -1){
            onSetActiveQuestion(activeQuestion +1);
        }
        else{
            onSetStep(3);
        }
    }
  return (
    <>
        <div className='container'>
    
         <div className='card text-center mx-auto shadow-lg p-2' style={{width:"45rem"}}>
         <div className='card-header'>
              <p><h2>{data.question}</h2></p>
         </div>
             <div className='card-content'>
                <div className='content'>
                    <h2 className='mb-5'></h2>
                    <div className='control' ref={radiosWrapper}>
                        { data.choices.map((choice,i)=>(
                            
                            <div className='form-check p-4'>
                            <label className='form-check-label float-start' key={i}>
                             <input className='form-check-input' type="radio" name='answer' value={choice} onChange={changeHandler}/>
                            {choice}
                            </label>
                            </div>
                            
                        ))}
                    </div>
                    
                    
                  {  error && <div className='text-danger'>{error} </div>}
                    <button type='button' className='btn btn-info mt-4' onClick={nextClickHandler}>Next</button>
                </div>
             </div>
         </div>
        </div>
     
    </>
  )
}

export default Question