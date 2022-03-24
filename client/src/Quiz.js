// import React, { useState, useEffect } from 'react'
// import Start from "./Start";
// import End from "./End";
// import Modal from "./Modal";
// import Question from "./Question";
// import quizData from "./data/quiz.json";
// let interval;
// const Quiz = () => {
//     const [step, setStep] = useState(1);
//     const [activeQuestion, setActiveQuestion] = useState(0);
//     const [answers, setAnswers] = useState([]);

//     const [showModel, setShowModel] = useState(false);
//     const [time, setTime] = useState(0);

//     useEffect(() => {
//       if (step === 3) {
//         clearInterval(interval);
//       }
//     }, [step]);
//     const quizStartHandler = () => {
//       setStep(2);
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     };
//     const resetClickHandler = () => {
//       setActiveQuestion(0);
//       setAnswers([]);
//       setStep(2);
//       setTime(0);
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     };

//   return (
//     <div>
//         <div className='container-fluid mt-5'>
//         {step === 1 && <Start onQuizStart={quizStartHandler} />}
//         {step === 2 && (
//           <Question
//             data={quizData.data[activeQuestion]}
//             onAnswerUpdate={setAnswers}
//             numberofQuestions={quizData.data.length}
//             activeQuestion={activeQuestion}
//             onSetActiveQuestion={setActiveQuestion}
//             onSetStep={setStep}
//           />
//         )}
//         {step === 3 && (
//           <End
//             results={answers}
//             data={quizData.data}
//             onReset={resetClickHandler}
//             onAnswersCheck={() => setShowModel(true)}
//             time={time}
//           />
//         )}

//         {showModel && (
//           <Modal
//             onClose={() => setShowModel(false)}
//             results={answers}
//             data={quizData.data}
//           />
//         )}
//         </div>
//     </div>
//   )
// }

// export default Quiz

import React, { useState, useEffect } from "react";
import {
  getSingleFiles,
  getMultipleFiles,
  getFileById,
  multipleFilesUpload,
  getTestById,
} from "./data/api";
import { useParams } from "react-router-dom";
const Quiz = (props) => {
  let { id } = useParams();
  const [testFile, setTestFile] = useState();

  const getTestFilesList = async () => {
    // usepara
    try {
      const testslist = await getTestById(id);
      setTestFile(testslist);
    } catch (error) {
      console.log(error);
    }
  };
  // props.getSingle();
  // const UploadSingleFiles = async () => {
  //   const formData = new FormData();
  //   // formData.append("coursename", coursename);
  //   // formData.append("category", category);
  //   // formData.append("description", description);
  //   // formData.append("rating", rating);
  //   formData.append("question", question);
  //   formData.append("choiceA", choiceA);
  //   formData.append("choiceB", choiceB);
  //   formData.append("choiceC", choiceC);
  //   formData.append("choiceD", choiceD);
  //   await multipleFilesUpload(formData,id);
  //   props.getSingle();
  // };
  useEffect(() => {
    getTestFilesList();
  }, []);

  const renderQuestion = (q, index) => {
    return (
      <div className="col mb-5">
        <p>
          <strong>
            Q{index + 1}. {q.question}
          </strong>
        </p>
         <input type="radio" id={q.choiceA} name="choices" value={q.choiceA} />
         <label for="html">{q.choiceA}</label>
        <br />
        
        <input type="radio" id={q.choiceB} name="choices" value={q.choiceB} />
        <label for="html">{q.choiceB}</label>
        <br />
      
        <input type="radio" id={q.choiceC} name="choices" value={q.choiceC} />
        <label for="html">{q.choiceC}</label>
        <br />
        <input type="radio" id={q.choiceD} name="choices" value={q.choiceD} />
       <label for="html">{q.choiceD}</label>
        <br />
        <br />
      </div>
    );
  };

  return (
    <>
      <form>{testFile?.testId.map(renderQuestion)}</form>
    </>
  );
};

export default Quiz;
