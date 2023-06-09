import { QuestionForQuiz } from "./QuestionForQuizDTO"

export interface PracticeSetToCreateDTO{
    title:string,
    questions:QuestionForQuiz[],
    difficulty:string
}