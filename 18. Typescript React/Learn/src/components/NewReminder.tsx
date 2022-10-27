import React, { useState } from "react";

interface ReminderListProps
{
    onCreateReminder: (title:string) => Promise<void>;
}

const NewReminder = ({onCreateReminder}: ReminderListProps):JSX.Element =>{
    const [title, setTitle] = useState<string>('');

    const handleSubmit = (e: React.FormEvent):void=>{
        e.preventDefault();
        onCreateReminder(title);
    }

    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <label htmlFor="title"></label>
            <input value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" type="text" className="form-control"/>
            <button className="btn btn-primary my-3 rounded-pill">Add Reminder</button>
        </form>
    )
}

export default NewReminder;