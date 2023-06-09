import React, { useEffect, useState } from 'react'
import { PracticeSetDTO } from '../models/PracticeSetDTO'
import { practiceService } from '../services/PracticeSetService';
import { useParams } from 'react-router-dom';

export default function Quiz() {

  // const [practiceSet,setPracticeSet]=useState<PracticeSetDTO>();
  // const param=useParams();
  // useEffect(()=>{
  //    const setId=param.id;
  //    if(setId){
  //     practiceService.getPracticeSetById(setId).then(x=>{
  //       setPracticeSet(x.data);
  //     })
  //    }
  //    console.log(practiceSet)
  // },[])

  return (
    <div>Quiz

      <p>Start your quiz here</p>
    </div>
  )
}
