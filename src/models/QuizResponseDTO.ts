import { Answer } from "./Answer";


export interface QuizResponseDto{
    id:string,
    title:string,
    answers:Answer[],
    correctAnswers:Answer[],
    selectedAnswers:Answer[],
    multipleAnswers:boolean,
    isCorrect:boolean,
    explanation:string
}