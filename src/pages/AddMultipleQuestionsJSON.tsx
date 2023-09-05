import React, { useState } from 'react'
import { questionService } from '../services/QuestionService';

export default function AddMultipleQuestionsJSON() {

  const [multiQuestions,setMultiQuestions]=useState('');

  function handleChange(e:any): void {
     setMultiQuestions(e.target.value)
  }

  function handleSubmit(): void {
    const jsonParsed=JSON.parse(multiQuestions);

    console.log(jsonParsed)

    questionService.addMultipleQuestions(jsonParsed).then(()=>{
      alert('Questions submited');
    })
  }

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
     <h1>Enter JSON</h1>
     <button onClick={handleSubmit}>SUBMIT</button>
     <textarea value={multiQuestions} onChange={handleChange} name="mulijson" id="mulijson" cols={90} rows={40}></textarea>
    </div>
  )
}
