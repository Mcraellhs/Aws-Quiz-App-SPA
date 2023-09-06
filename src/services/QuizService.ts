import axios from "axios"
import { Answer } from "../models/Answer";
import { QuizSubmitData } from "../models/QuizSubmitData";
import { LOCAL_HOST } from "../localhost";

class QuizService{
    
    private API_URL:string=LOCAL_HOST+"api/question"

    constructor(){}

    getQuestions(){
      return axios.get(this.API_URL);
    }

    submitQuiz(data:QuizSubmitData[]){
      return axios.post(LOCAL_HOST+'api/quiz',data)
    }


}

export const quizService = new QuizService();