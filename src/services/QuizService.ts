import axios from "axios"
import { Answer } from "../models/Answer";
import { QuizSubmitData } from "../models/QuizSubmitData";

class QuizService{
    
    private API_URL:string="http://localhost:8080/api/question"

    constructor(){}

    getQuestions(){
      return axios.get(this.API_URL);
    }

    submitQuiz(data:QuizSubmitData[]){
      return axios.post('http://localhost:8080/api/quiz',data)
    }


}

export const quizService = new QuizService();