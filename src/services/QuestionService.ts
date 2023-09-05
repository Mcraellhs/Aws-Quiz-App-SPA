import axios from "axios";
import { QuestionForAddDTO } from "../models/QuestionForAddDTO";
import { LOCAL_HOST } from "../localhost";


class QuestionService{

    private API_URL:string=LOCAL_HOST+"api/question"

    getAllQuestions(){
      return axios.get(this.API_URL+"/all");
    }

    addQuestion(question:QuestionForAddDTO){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: 'Bearer ' + token,
      };
    
      return axios.post(this.API_URL,question,{headers});
    }

    addMultipleQuestions(questions:QuestionForAddDTO[]){
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: 'Bearer ' + token,
      };
    
      return axios.post(this.API_URL+"/multi",questions,{headers});
    }
    



}

export const questionService = new QuestionService();