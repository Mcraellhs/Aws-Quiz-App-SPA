import axios from "axios";


class ContactService {
    constructor(){

    }

    submitContactMessage(data:{email:string,message:string}){
        return axios.post('http://35.180.58.28:8080/messages',data);
    }


}

export const contactService = new ContactService();