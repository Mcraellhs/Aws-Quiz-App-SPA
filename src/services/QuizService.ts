import axios from "axios"
import { Answer } from "../models/Answer";

class QuizService{
    
    private API_URL:string="http://localhost:8080/question"

    constructor(){}

    getQuestions(){
      return axios.get(this.API_URL);
    }

    submitQuiz(data:{
      id:string,
      title:string,
      selectedAnswers:Answer[]
    }[]){
      return axios.post('http://localhost:8080/quiz',data)
    }


}

export const quizService = new QuizService();