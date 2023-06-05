import { Answer } from "./Answer"

export interface QuestionForQuiz{
    id:string,
    title:string
    answers:Answer[],
    multipleAnswers:false
}