import { Answer } from "./Answer"

export interface QuestionDTO{
    id:string,
    title:string
    answers:Answer[],
    correctAnswers:Answer[],
    multipleAnswers:false
}