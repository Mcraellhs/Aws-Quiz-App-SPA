import React, { useEffect, useState } from 'react'
import '../css/create-practice-set.css'
import Question from '../components/Question'
import QuestionPreview from '../components/QuestionPreview'
import { quizService } from '../services/QuizService';
import { QuestionDTO } from '../models/QuestionDTO';
export default function CreatePracticeSet() {
    const [questions,setQuestions]=useState<QuestionDTO[]>([]);

    useEffect(()=>{
      quizService.getQuestions().then((x)=>{
       setQuestions(x.data);
      })
    },[])
    return (
    <div className='create-practice-set'>
        <div className="label">
        <h2>Add questions to the set</h2>
        </div>

        <div className='questions-section'>
           {questions.map(x=><Question key={x.id} {...x} /> )}
        </div>
    </div>
  )
}
