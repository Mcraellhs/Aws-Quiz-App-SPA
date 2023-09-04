import React from 'react'
import '../css/summary.css'
import { SummaryData } from '../models/SummaryData';
import { calculatePercentage } from '../utils/percentageCalculator';

interface Props {
    quizData:any,
    setSummaryDisplayed:(x:boolean)=>void
}

export default function Summary({quizData,setSummaryDisplayed}:Props) {

   
    const procesData = (data: any[]): SummaryData => {
        let correctAnswers = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].correct) {
                correctAnswers++;
            }
        }
        return {
            correctAnswers: correctAnswers,
            wrongAnswers: data.length - correctAnswers,
            percentage: calculatePercentage(correctAnswers, data.length)
        }
    }

    const summaryData=procesData(quizData)
    
    return (
        <div className='summary'>
            <h1>Your results are here</h1>
            <h2>You have scored {summaryData.percentage} % </h2>
            <h2>Number of correct answers: {summaryData.correctAnswers}</h2>
            <h2>Number of wrong answers: {summaryData.wrongAnswers}</h2>
            <button className='view-answers-btn' onClick={()=>setSummaryDisplayed(false)}>View Answers</button>

           
        </div>
    )
}
