import React, { useEffect, useState } from 'react'
import { QuestionForQuiz } from '../models/QuestionForQuizDTO'
import { Answer } from '../models/Answer';
import '../css/quiz-question.css'
import axios from 'axios';

interface Props {
  questions: QuestionForQuiz[]
}

export default function QuizQuestion({ questions }: Props) {

  const [questionToDisplay, setQuestionToDisplay] = useState<{ question: QuestionForQuiz, selectedAnswers: Answer[] }[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if (isLoading) {
      const display: { question: QuestionForQuiz, selectedAnswers: Answer[] }[] = [];

      for (let i = 0; i < questions.length; i++) {
        display.push({
          question: questions[i],
          selectedAnswers: []
        })
      }
      setQuestionToDisplay(display);
      setIsLoading(false);

    }
  }, [isLoading])

  const handleAnswerSelect = (e: any, x: Answer) => {
    const checked = e.target.checked;
    if (checked) {
      setQuestionToDisplay((prevQuestionToDisplay) => {
        const updatedQuestionToDisplay = [...prevQuestionToDisplay];

        if (!updatedQuestionToDisplay[questionIndex].question.multipleAnswers) {
          updatedQuestionToDisplay[questionIndex].selectedAnswers = [];
        }

        updatedQuestionToDisplay[questionIndex].selectedAnswers.push(x);
        return updatedQuestionToDisplay;
      });
    } else {
      setQuestionToDisplay((prevQuestionToDisplay) => {
        const updatedQuestionToDisplay = [...prevQuestionToDisplay];
        updatedQuestionToDisplay[questionIndex].selectedAnswers = updatedQuestionToDisplay[
          questionIndex
        ].selectedAnswers.filter((y) => y.id !== x.id);
        return updatedQuestionToDisplay;
      });
    }
  }

  const handleSubmit = () => {
    console.log(questionToDisplay);

    const bodyData:{
      id:string,
      title:string,
      selectedAnswers:Answer[]
    }[]=[];

    questionToDisplay.forEach(x=>{
      bodyData.push({
        id:x.question.id,
        title:x.question.title,
        selectedAnswers:x.selectedAnswers
      })
    })

    axios.post('http://localhost:8080/quiz',bodyData).then((x)=>{
      console.log(x)
    })
  }

  const isChecked = (id: any) => {
    const searchAnswer = questionToDisplay[questionIndex].selectedAnswers.find(x => x.id === id);
    if (!!searchAnswer) {
      return true;
    }
    return false;
  }

  return isLoading ? <div>Loading...</div> : (
    <div className='quiz-question-component'>
      <div className="quiz-question-block">
        {questionToDisplay[questionIndex].question.title}
      </div>

      <div className="quiz-question-block-answers">
        {questionToDisplay[questionIndex].question.answers.map((x) => {
          return <div key={x.id}>
            <input type="checkbox" className='checkbox-pop' checked={isChecked(x.id)} onChange={(e) => handleAnswerSelect(e, x)} />
            {x.title}
          </div>
        })}
      </div>


      <div className='quiz-question-block-btns'>

        {questionIndex !== questions.length - 1 && <button onClick={() => setQuestionIndex(questionIndex + 1)}>Next</button>}

        {questionIndex !== 0 && <button onClick={() => setQuestionIndex(questionIndex - 1)}>Previous</button>}
        <button className='submit' onClick={handleSubmit} >Submit</button>
      </div>


    </div>
  );
}
