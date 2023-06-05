import React, { useState } from 'react'
import '../css/questions.css'
import { QuestionForAddDTO } from '../models/QuestionForAddDTO'
import { questionService } from '../services/QuestionService'

export default function CreateQuestion() {

  const [question, setQuestion] = useState({
    title: "",
    explanation: ""
  })

  const [answer, setAnswer] = useState(
    [{
      correct: false,
      title: ""
    },
    {
      correct: false,
      title: ""
    }
    ]
  )

  const handleQuestionChange = (e: any) => {
    setQuestion((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value

    }))
  }



  const handleAnswerChange = (e: any, index: number) => {

    const newAnswers = [...answer];
    let targetValue: string | boolean;
    if (e.target.name === "title") {
      targetValue = e.target.value;
    } else {
      targetValue = e.target.checked;
    }

    newAnswers[index] = {
      ...newAnswers[index],
      [e.target.name]: targetValue
    };

    setAnswer(newAnswers);
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    
    const data=transformDataToSaveQuestion()
    questionService.addQuestion(data).then(()=>{
      alert("Question added");
    })
  }

  const transformDataToSaveQuestion = (): QuestionForAddDTO => {
    const correctAnswers = [];
    const transformedAnswers = [];

    for (let i = 0; i < answer.length; i++) {
      if (answer[i].correct) {
        correctAnswers.push({
          title: answer[i].title
        });
      }
      transformedAnswers.push({ title: answer[i].title });
    }

    return {
      title: question.title,
      explanation: question.explanation,
      correctAnswers: correctAnswers,
      answers: transformedAnswers
    }

  }


  const addAnswerField = () => {
    const newAnswers = [...answer];
    newAnswers.push({
      title: "",
      correct: false
    })

    setAnswer(newAnswers);
  }

  return (
    <div className='create-question-form'>
      <form>
        <div className="form-group">
          <input onChange={(e) => handleQuestionChange(e)} id='title' type="textfield" className='question-title input-text' value={question.title} placeholder='Question title' /><br />
        </div>
        {answer.map((x, index) => {
          return <div key={index} className="form-group">
            <input type="checkbox" name="correct" onChange={(e) => handleAnswerChange(e, index)} checked={x.correct} />
            <input className='input-text' name="title" onChange={(e) => handleAnswerChange(e, index)} type="text" value={x.title} placeholder='Answer' />
          </div>
        })}
        <div className="form-group">
          <input type='button' value="+" onClick={addAnswerField} />
        </div>

        <div className="form-group">
          <input type='textfield' className='question-explanation' id='explanation' value={question.explanation} onChange={handleQuestionChange} placeholder='explanation' />
        </div>

        <input type="submit" onClick={handleClick} value="Add" />
      </form>
    </div>
  )
}
