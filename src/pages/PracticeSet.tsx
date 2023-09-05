import React, { useEffect, useState } from 'react'
import '../css/practice-set.css'
import { Link } from 'react-router-dom'
import { PracticeSetDTO } from '../models/PracticeSetDTO'
import { useDispatch, useSelector } from 'react-redux';
import { getPracticeSets } from '../redux-slice/PracticeSetSlice';
import { practiceService } from '../services/PracticeSetService';

export default function PracticeSet() {

  const practiceSets:PracticeSetDTO[] = useSelector((state:any)=>state.practiceSet.practiceSets)
  
  const dispatch = useDispatch<any>();
   useEffect(()=>{
     dispatch(getPracticeSets());
    },[])

    const deletePracticeSet=(id:string)=>{
      practiceService.deletePracticeSet(id).then(()=>{
        alert("DELETED");
      }).catch(()=>{
        alert('failed to delete');
      })
    }

  return (
    <div className='practice-set-component'>
        <Link to="create" className="create-practice-set-button">
         create practice set 
        </Link>
        <div className="practice-set-list">
          {practiceSets.map((x)=>{
            return <div className='practic-set-block' key={x.id}>
             <div> {x.id}</div>
             <div> {x.title}</div>
             <div><button><Link to={x.id}>View</Link></button></div>
             <div><button><Link to={x.id+"/edit"}>Edit</Link></button></div>
             <div><button onClick={()=>{deletePracticeSet(x.id)}}>Delete</button></div>

            </div>
          })}
        </div>
    </div>
  )
}
