import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import '../css/quiz-question.css'
import Summary from '../components/Summary';

export default function Result() {
  const selector  = useSelector((state:any)=>state.quiz.data)
 
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLoading,setIsLoading] = useState(true)
  const [isSummaryDisplayed,setSummaryDisplayed]=useState(true);

 
  useEffect(()=>{
    
    if(selector.length!==0){
      setIsLoading(false)
    }
  },[selector])


  const isQuestionCorrect=(id:number)=>{
    const correctAnswer=selector[questionIndex].correctAnswers.find((x:any)=>x.id===id)
    const checked = isChecked(id);
    if(correctAnswer){
      return "answer-correct"
    }
    if(checked){
      return "answer-incorrect";
    }

    return "answer-none"
  }

  const isChecked=(id:number):boolean=>{
    const checked = selector[questionIndex].selectedAnswers.find((x:any)=>x.id===id)
    
    if(checked){
      return true;
    }
      return false;
  }


  return isLoading?<div>Loading...</div>: (
    isSummaryDisplayed?<Summary quizData={selector} setSummaryDisplayed={setSummaryDisplayed}/>:
    <div className='quiz-question-component'>
       <div className="quiz-question-block">
        {selector[questionIndex].title}
      </div>

      <div className="quiz-question-block-answers">
        {selector[questionIndex].answers.map((x:any) => {
          return <div key={x.id} className={isQuestionCorrect(x.id)}>
            <input type="checkbox" className='checkbox-pop' readOnly={true} checked={isChecked(x.id)} />
            {x.title}
          </div>
        })}
      </div>
       
       <div className="question-numberings">
        {selector.map((x:any,index:number)=>{
          return <div className={questionIndex===index?'selected':""} key={index} onClick={()=>setQuestionIndex(index)}>
               {index+1}
          </div>
        })}
      </div> 

      <div className='quiz-question-block-btns'>

        {questionIndex !== selector.length - 1 && <button onClick={() => setQuestionIndex(questionIndex + 1)}>Next</button>}

        {questionIndex !== 0 && <button onClick={() => setQuestionIndex(questionIndex - 1)}>Previous</button>}
      </div>

    </div>
  )
}
