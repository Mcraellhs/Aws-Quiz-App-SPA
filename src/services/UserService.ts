import axios from "axios";
import { LOCAL_HOST } from "../localhost";


class UserService{
    constructor(){}
  
    private API_URL=LOCAL_HOST+'api'


    login(data:{username:string,password:string}){
        return axios.post(this.API_URL+"/login",data);
    }

    register(data:{username:string,password:string}){
        return axios.post(this.API_URL+"/register",data);

    }
}

export const userService = new UserService();