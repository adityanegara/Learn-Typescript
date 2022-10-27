import ReminderList from "./components/ReminderList";
import { useState, useEffect} from "react";
import Reminder from "./models/reminder";
import reminderServices from './services/reminder'
import NewReminder from "./components/NewReminder";
import CreateResponse from "./models/response";

const App = () => {
  const [reminderList, setReminderList] = useState<Reminder[]>([]);

  useEffect(()=>{
    fetchReminderList();
  }, [])

  const fetchReminderList = async():Promise<void> =>{
    const reminderList = await reminderServices.getReminders() as Reminder[];
    setReminderList(reminderList); 
  }

  const removeReminder = async (id:number):Promise<void> =>{
      const removeReminderResponse = await reminderServices.removeReminder(id);
      if(removeReminderResponse){
        setReminderList(reminderList.filter((reminder: Reminder) => reminder.id !== id))
      }
  }

  const createReminder = async (title:string):Promise<void> =>{
    const createReminderResponse: CreateResponse | null = await reminderServices.addReminders(title);
    if(createReminderResponse){
      setReminderList([createReminderResponse, ...reminderList])
    }
  }

  return (
    <div className="App">
        <NewReminder onCreateReminder={createReminder}/>
        <ReminderList items={reminderList} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
