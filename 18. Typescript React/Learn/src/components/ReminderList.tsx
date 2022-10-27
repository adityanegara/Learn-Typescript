import Reminder from '../models/reminder';

interface ReminderListProps
{
    items: Reminder[];
    onRemoveReminder: (id:number) => Promise<void>;
}

const ReminderList = ({items, onRemoveReminder}: ReminderListProps):JSX.Element =>{
    const renderReminderList = (reminderList: Reminder[]):JSX.Element[] =>{
        return (
            reminderList.map((reminder)=>{
                return(
                    <li key={reminder.id} className='list-group-item d-flex'>
                        <p>{reminder.title}</p>
                        <button onClick={()=>{onRemoveReminder(reminder.id)}} className='btn btn-outline-danger mx-2 rounded-pill'>Delete</button>
                    </li>
                )
            })
        )
    }
 
   return(
    <ul className='list-group'>
        {renderReminderList(items)}
    </ul>
   )
}

export default ReminderList;