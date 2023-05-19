import React from 'react'
import  '../css/home.css'

export default function Home() {
  return (
    <div className='home'>
      <h1>Welcome to ASW Certified Cloud Practitioner Exam preparation</h1>
       <h1>Select Practice Set on the left side to start the exam</h1>
        
        <h2>To make sure you are ready to pass the exam, score the percentage displayed below</h2>
       <span>EASY -&gt; Pass with <span className='green'>90-95%</span>  </span><br />
       <span>Medium -&gt; Pass with <span className='green'>80-85%</span>  </span><br />
       <span>Hard -&gt; Pass with minimum score (<span className='green'>70%</span>)  </span>
        
       <p>
        Exams are designed in a way to make sure you understand the concepts and to prepare you for every possible situation.
        <br />  All topics covered in the exam may appear on the real exam.
        Each practice set has it's difficulty. If you pass Hard practice set on the first try, then you will pass the real exam with no problems.</p>

      
      </div>
  )
}
