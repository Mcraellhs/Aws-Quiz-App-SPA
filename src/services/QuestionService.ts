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


}

export const questionService = new QuestionService();