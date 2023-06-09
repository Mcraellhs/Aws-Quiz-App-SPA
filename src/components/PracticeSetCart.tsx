import React from 'react'
import PracticeSetPreview from './PracticeSetPreview'
import { useDispatch, useSelector } from 'react-redux'
import { closePracticeSetCart } from '../redux-slice/PracticeSetCartSlice';

export default function PracticeSetCart(value:{title:string,count:number}) {
  const dispatch=useDispatch();
  const practiceSet = useSelector((state:any)=>state.practiceSetCart)
  
  const handleClose=()=>{
    dispatch(closePracticeSetCart())
  }

  const handleSave=()=>{
     console.log(practiceSet)
  }

  return (
  <>
    <div className='practice-set-cart'>
        <div>Practice set: {value.title}</div>
        <div>Question count: {value.count} </div><br />
        <div><button onClick={handleSave}>Save</button></div>
        <div><button onClick={handleClose}>close</button></div>
    </div>
    <PracticeSetPreview count={value.count}/>
  </>
  )
}
