import { Answer } from "./Answer"

export interface QuestionForAddDTO{
    title:string
    answers:Answer[],
    correctAnswers:Answer[],
    explanation:string
}