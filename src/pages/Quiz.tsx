import React, { useEffect, useState } from 'react'
import { PracticeSetDTO } from '../models/PracticeSetDTO'
import { practiceService } from '../services/PracticeSetService';
import { useParams } from 'react-router-dom';
import '../css/quiz.css';
import Loading from '../components/Loading';
import QuizQuestion from '../components/QuizQuestion';
import { QuestionForQuiz } from '../models/QuestionForQuizDTO';

export default function Quiz() {

  const [practiceSet,setPracticeSet]=useState<PracticeSetDTO>({
    id:"",
    title:"",
    questions:[],
    difficulty:""
  });
  const [isLoadindg,setLoading]=useState(true);
  const [isStarted,setStarted]=useState(false);
  const param=useParams();
  useEffect(()=>{
     const setId=param.id;
     if(setId){
      practiceService.getPracticeSetById(setId).then(x=>{
       setStarted(false)
        setPracticeSet(x.data);
        setLoading(false)
      })
     }
  },[param])

  const handleStart=()=>{
    setStarted(true)
  }
  return (
    <div>
      {isLoadindg?<Loading/>:
      
      <div className='quiz-page'>
      
      {!isStarted ? <div className="quiz-header">
        <h1>Quiz</h1>
        <h2>{practiceSet?.title}</h2>
        <h2>Difficulty: {practiceSet?.difficulty}</h2>
        <h3>Click start to begin your Exam</h3>
        <button className='quiz-start-btn' onClick={handleStart}>START</button>
        </div>: <QuizQuestion questions={practiceSet.questions}/>
            
        }

    </div>
    

  
      }
    </div>
    
  )
}
