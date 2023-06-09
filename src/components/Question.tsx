import React, { useState } from 'react'
import { QuestionForQuiz } from '../models/QuestionForQuizDTO'
import QuestionPreview from './QuestionPreview'
import { QuestionDTO } from '../models/QuestionDTO';
import { useDispatch } from 'react-redux';
import { addToPracticeSetCart } from '../redux-slice/PracticeSetCartSlice';

export default function Question(question:QuestionDTO) {
    const [isToggled,setIsToggled]=useState(false);
    const dispatch=useDispatch()
    const handlePreviewClick =()=>{
        setIsToggled(true);
    }
  
    const handleAdd=()=>{
        const questionForQuizDTO:QuestionForQuiz={
            id:question.id,
            title:question.title,
            answers:question.answers,
            multipleAnswers:question.multipleAnswers
        }
     dispatch(addToPracticeSetCart(questionForQuizDTO))

    }
    return (
    <>
    <div className='question-block'>
        <div className="question-title quest-section">{question.title}</div>
        <div className="question-buttons quest-section">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handlePreviewClick}>Preview</button>
            </div>
    </div>
     {isToggled?<QuestionPreview question={question} toggle={setIsToggled} />:<></>}
    </>

  )
}
