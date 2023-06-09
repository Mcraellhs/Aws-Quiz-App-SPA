import axios from "axios";
import { PracticeSetToCreateDTO } from "../models/PracticeSetToCreateDTO";
import { PracticeSetDTO } from "../models/PracticeSetDTO";


class PracticeSetService{
    
    private API_URL="http://localhost:8080/practice-set";
   
    public createPractice(data:PracticeSetToCreateDTO){
        return axios.post(this.API_URL,data);
    }

    public getPracticeSets(){
        return axios.get(this.API_URL);
    }

    public getPracticeSetById(id:string){
        return axios.get(this.API_URL+"/"+id);
    }

    public updatePracticeSet(practiceSet:PracticeSetDTO,id:string){
        console.log(id)
        return axios.put(this.API_URL+"/"+id,practiceSet);
    }
}

export const practiceService  = new PracticeSetService();