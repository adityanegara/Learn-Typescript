import Reminder from '../models/reminder';

interface ReminderListProps
{
    items: Reminder[]
}


const ReminderList = ({items}: ReminderListProps) =>{
    const renderReminderList = (reminderList: Reminder[]):JSX.Element[] =>{
        return (
            reminderList.map((reminder)=>{
                return(
                    <li>
                        <p>{reminder.title}</p>
                    </li>
                )
            })
        )
    }

   return(
    <ul>
        {renderReminderList(items)}
    </ul>
   )
}

export default ReminderList;