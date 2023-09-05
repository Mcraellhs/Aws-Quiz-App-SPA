import axios from "axios";
import { QuestionForAddDTO } from "../models/QuestionForAddDTO";


class QuestionService{

    private API_URL:string="http://localhost:8080/question"

    getAllQuestions(){
      const encodedUrl = `http://localhost:8080/question/all`;
      return axios.get(encodedUrl);
    }

    addQuestion(question:QuestionForAddDTO){
      return axios.post(this.API_URL,question);
    }

    addMultipleQuestions(questions:QuestionForAddDTO[]){
      return axios.post('http://localhost:8080/question/multi',questions);
    }
    



}

export const questionService = new QuestionService();