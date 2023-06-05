import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>Dashboard
<br />
      <Link to="questions">Questions</Link><br />
      <Link to="practice-set">Practice sets</Link>

    </div>
  )
}
