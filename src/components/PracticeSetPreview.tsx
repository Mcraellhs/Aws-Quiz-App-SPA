import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PracticeSetToCreateDTO } from '../models/PracticeSetToCreateDTO';
import { createPracticeSet } from '../redux-slice/PracticeSetCartSlice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export default function PracticeSetPreview(value:{count:number}) {
  const [title,setTitle]=useState<string>("");
  const [difficulty,setDifficulty]=useState<string>("EASY");
  const questions = useSelector((state:any)=>state.practiceSetCart.question)
  const dispatch = useDispatch<any>();
  
  const handleTitleChange=(e:any)=>{
     setTitle(e.target.value);
  }

  const handleDifficultyChange=(e:any)=>{
    setDifficulty(e.target.value)
  }

  const savePracticeSet=(e:any)=>{
        e.preventDefault();
     const practiceSet=createPracticeSetObject();
     dispatch(createPracticeSet(practiceSet))

  }
 
  function createPracticeSetObject():PracticeSetToCreateDTO{
     const practiceSet:PracticeSetToCreateDTO={
      title:title,
      questions:questions,
      difficulty:difficulty
     }

     return practiceSet;
  }
  

  return (
    <div className='practice-set-preview'>
          <form>
            <input type="text" onChange={handleTitleChange} value={title} name="title" placeholder='Title' />
            <br />
            <h2>Difficulty:</h2>
              <select name="select" onChange={handleDifficultyChange} value={difficulty} id="">
                <option value="EASY">EASY</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HARD">HARD</option>
              </select>
             <h2>Question count: {value.count}</h2>
             <button onClick={savePracticeSet} >Save</button>
          </form>

    </div>
  )
}
