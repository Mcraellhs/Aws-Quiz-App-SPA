import { QuestionForQuiz } from "./QuestionForQuizDTO"


export interface PracticeSetDTO{
    id:string
    title:string,
    questions:QuestionForQuiz[],
    difficulty:string
}