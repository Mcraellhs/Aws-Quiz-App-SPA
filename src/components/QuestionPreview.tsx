import React from 'react'
import { QuestionForQuiz } from '../models/QuestionForQuizDTO';
import { QuestionDTO } from '../models/QuestionDTO';

export default function QuestionPreview(props:{question:QuestionDTO,toggle:any}) {
  

 

  const handleClose = ()=>{
    props.toggle(false);
  }
  
    return (
        <div className="question-preview">
                <p>Question: {props.question.title}</p>
                <div className='answers'>
                <p>Answers:</p> 
                <ul>
                {props.question.answers.map(x=><li key={x.id}>{x.title}</li>)}

                </ul>
                <p>Correct Answers</p>
                {props.question.correctAnswers? <div>
                  <ul>
                {props.question.correctAnswers.map(x=><li key={x.id}>{x.title}</li>)}

                </ul>
                </div>:<></>}
                </div>
                <button className='close-preview' onClick={handleClose}>Close</button>
            </div>
      )
 
 
    
}
