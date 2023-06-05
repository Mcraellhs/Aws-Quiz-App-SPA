import React, { useEffect, useState } from 'react'
import '../css/list-of-questions.css'
import { QuestionForQuiz } from '../models/QuestionForQuizDTO'
import { questionService } from '../services/QuestionService'
import QuestionPreview from '../components/QuestionPreview'
import { QuestionDTO } from '../models/QuestionDTO'

export default function ListOfQuestions() {
    const [isToggled,setIsToggled]=useState(false);
    const [questions,setQuestions]=useState<QuestionDTO[]>([])
    const [previewQuestion,setPreviewQuestion] =useState<QuestionDTO>({id:"",
    title:"",
    answers:[],
    correctAnswers:[],
    multipleAnswers:false
  })  
    useEffect(()=>{
      questionService.getAllQuestions  ().then((x)=>{
        setQuestions(x.data);
      })
    },[])

    const togglePreview=(question:QuestionDTO)=>{
      setPreviewQuestion(question);
      setIsToggled(true);
    }
    
  return (
    <div className='questions-list'>
{isToggled?<QuestionPreview question={previewQuestion} toggle={setIsToggled} />:<></>}

<table id="questions">
<thead>
  <tr>
    <th>Id</th>
    <th>Title</th>
    <th>Buttons</th>
  </tr>
  </thead>
  <tbody>
  {questions.map((x)=>{
    return <tr key={x.id}>
    <td>{x.id}</td>
    <td>{x.title}</td>
    <td>
        <button onClick={()=>togglePreview(x)}>Preview</button>
        <button>Delete</button>

    </td>
  </tr>
  })}
  
  </tbody>
</table>

    </div>
  )
}
