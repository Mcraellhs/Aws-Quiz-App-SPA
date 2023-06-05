import React, { useState } from 'react'
import { QuestionForQuiz } from '../models/QuestionForQuizDTO'
import QuestionPreview from './QuestionPreview'
import { QuestionDTO } from '../models/QuestionDTO';

export default function Question(question:QuestionDTO) {
    const [isToggled,setIsToggled]=useState(false);
  
    const handlePreviewClick =()=>{
        setIsToggled(true);
    }
  
    return (
    <>
    <div className='question-block'>
        <div className="question-title quest-section">{question.title}</div>
        <div className="question-buttons quest-section">
            <button>Add</button>
            <button onClick={handlePreviewClick}>Preview</button>
            </div>
    </div>
     {isToggled?<QuestionPreview question={question} toggle={setIsToggled} />:<></>}
    </>

  )
}
