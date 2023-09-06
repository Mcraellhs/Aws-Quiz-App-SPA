import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PracticeSetDTO } from '../models/PracticeSetDTO';
import { practiceService } from '../services/PracticeSetService';
import '../css/practice-set-edit.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeSingleSet, getPracticeSetById, removeQuestionFromSingleSet, updatePracticeSet } from '../redux-slice/PracticeSetSlice';
export default function PracticeSetEdit() {

    const param = useParams<string>();
    const dispatch = useDispatch<any>();
    const practiceSet=useSelector((state:any)=>state.practiceSet.singleSet);
    
    useEffect(()=>{
      const practiceSetId=param.id;
      if(practiceSetId){
        dispatch(getPracticeSetById(practiceSetId))
        
      }
    },[])

    const handleOnChange=(e:any)=>{
        const data={
          id:practiceSet.id,
          title:practiceSet.title,
          difficulty:practiceSet.difficulty,
          questions:practiceSet.questions,
          [e.target.name]:e.target.value
        }
        dispatch(changeSingleSet(data))
    }

    const handleSave=(e:any)=>{
      e.preventDefault();
      // console.log(practiceSet)
      dispatch(updatePracticeSet({
        practiceSet:practiceSet,
        id:practiceSet.id
      }));
    }

    const handlePreview=(e:any)=>{
      e.preventDefault();
       
    }

    const handleRemove=(e:any,id:string)=>{
      e.preventDefault();
         dispatch(removeQuestionFromSingleSet(id))
    }

  return (
    <div className='practice-set-edit-section'>
         <form>
          Title: <input type="text" name='title' onChange={handleOnChange} value={practiceSet.title}/><br />
          Difficulty: <select name="difficulty" onChange={handleOnChange} value={practiceSet.difficulty}>
              <option value="EASY">EASY</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HARD">HARD</option>
          </select>
          <button className='save-practice-set' onClick={handleSave}>SAVE</button>
          {practiceSet.questions.map((x:any)=>{
            return <div key={x.id} className='practice-set-edit-question-block'>
               {x.title}
               <button onClick={handlePreview}>Preview</button>
               <button onClick={(e)=>handleRemove(e,x.id)}>Remove</button>
            </div>
          })}
         </form>
        
    </div>
  )
}
