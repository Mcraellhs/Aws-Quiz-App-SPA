import React from 'react'
import { Link } from 'react-router-dom'

export default function Questions() {
  return (
    <div className='dashboard-questions'>
        <Link to="create">Add questions</Link><br />
        <Link to="list" >List of questions  </Link>
    </div>
  )
}
