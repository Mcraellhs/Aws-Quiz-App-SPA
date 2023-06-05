import axios from "axios";
import { QuestionForAddDTO } from "../models/QuestionForAddDTO";


class QuestionService{

    private API_URL:string="http://localhost:8080/question"

    constructor(){}

    getAllQuestions(){
      return axios.get(this.API_URL+"/all");
    }

    addQuestion(question:QuestionForAddDTO){

      return axios.post(this.API_URL,question);
    }


}

export const questionService = new QuestionService();