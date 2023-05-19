import axios from "axios"

class QuizService{
    
    private API_URL:string="http://localhost:8080/question"

    constructor(){}

    getQuestions(){
      return axios.get(this.API_URL);
    }


}

export const quizService = new QuizService();