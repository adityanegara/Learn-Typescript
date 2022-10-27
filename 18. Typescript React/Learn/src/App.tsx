import ReminderList from "./components/ReminderList";
import REMINDER from "./constant/reminder";
import { useState } from "react";
import Reminder from "./models/reminder";

const App = () => {
  const [reminderList, setReminderList] = useState<Reminder[]>(REMINDER);
  return (
    <div className="App">
        <ReminderList items={reminderList}/>
    </div>
  );
}

export default App;
