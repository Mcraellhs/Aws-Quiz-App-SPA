import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/aws-exams.css'

export default function AWSExams() {

  const selector = useSelector((state: any) => state.practiceSet);


  return (
    <div className="aws-exams">
        <h1>Pick your exam set</h1>

        {selector.practiceSets.map((x: any) => {
                    return (
                     
                         <Link className='aws-exams-set' key={x.id} style={{ textDecoration: 'none' }} to={"/quiz/practice-set/"+x.id}>
                      <div  className="practice-set">
                        <h1>{x.title}</h1>
                        <span> {x.difficulty}</span>
                      </div>
                      </Link>
                      
                    );
                  })}

    </div>
  )
}
