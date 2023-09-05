import axios from "axios";


class UserService{
    constructor(){}
  
    private API_URL='http://localhost:8080/api'


    login(data:{username:string,password:string}){
        return axios.post(this.API_URL+"/login",data);
    }

    register(data:{username:string,password:string}){
        return axios.post(this.API_URL+"/register",data);

    }
}

export const userService = new UserService();