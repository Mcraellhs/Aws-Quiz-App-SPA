import React from 'react'
import '../css/practice-set.css'
import { Link } from 'react-router-dom'

export default function PracticeSet() {
  return (
    <div className='practice-set-component'>
        <Link to="create" className="create-practice-set-button">
         create practice set 
        </Link>
        <div className="practice-set-list">
          list table
        </div>
    </div>
  )
}
