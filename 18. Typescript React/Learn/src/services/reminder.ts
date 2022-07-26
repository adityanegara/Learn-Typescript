import axios from "axios";
import Reminder from "../models/reminder";
import CreateResponse from "../models/response";

class ReminderService{
    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    });

    getReminders = async ():Promise<Reminder[] | null> =>{
        try{
            const response = await this.http.get<Reminder[]>('/todos');
            return response.data as Reminder[];
        }
        catch(e){
          console.log(e);
          return null;
        }
    }

    addReminders = async (title:string):Promise<CreateResponse | null> => {
        try{
            const response = await this.http.post<Reminder>('/todos', 
            {
                title
            })
            return response.data;
        }
        catch(e){
            console.log(e);
            return null;
        }
    }

    removeReminder = async (id: number):Promise<{} | void> =>{
        try{
            const response = await this.http.delete(`/todos/${id}`)
            return response.data;
        }catch(e){
            console.log(e);
        }
    }
}

export default new ReminderService();