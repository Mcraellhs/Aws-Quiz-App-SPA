import { Answer } from "./Answer";

export interface QuizSubmitData{
    id:string,
    title:string,
    selectedAnswers:Answer[]
  }