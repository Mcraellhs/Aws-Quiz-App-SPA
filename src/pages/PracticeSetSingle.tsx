import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { practiceService } from '../services/PracticeSetService';
import { PracticeSetDTO } from '../models/PracticeSetDTO';

export default function PracticeSetSingle() {
    
    const param = useParams<string>();
    const [practiceSet,setPracticeSet]=useState<PracticeSetDTO>()

    useEffect(()=>{
      if(param.id){
        practiceService.getPracticeSetById(param.id).then((x)=>{
            setPracticeSet(x.data);
        })
      }
    },[])

  return (
    <div>PracticeSetSingle</div>
  )
}
