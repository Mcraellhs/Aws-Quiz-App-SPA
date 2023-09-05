import axios from "axios";
import { PracticeSetToCreateDTO } from "../models/PracticeSetToCreateDTO";
import { PracticeSetDTO } from "../models/PracticeSetDTO";
import { LOCAL_HOST } from "../localhost";


class PracticeSetService{
    
    private API_URL=LOCAL_HOST+"api/practice-set";
   
    public createPractice(data:PracticeSetToCreateDTO){
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: 'Bearer ' + token,
        };
      
        return axios.post(this.API_URL,data,{headers});
    }

    public getPracticeSets(){
        return axios.get(this.API_URL);
    }

    public getPracticeSetById(id:string){
        return axios.get(this.API_URL+"/"+id);
    }

    public updatePracticeSet(practiceSet:PracticeSetDTO,id:string){
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: 'Bearer ' + token,
        };
      
        return axios.put(this.API_URL+"/"+id,practiceSet,{headers});
    }

    public deletePracticeSet(id:string){
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: 'Bearer ' + token,
        };
        return axios.delete(this.API_URL+"/"+id,{headers});
    }
}

export const practiceService  = new PracticeSetService();