import Note from "./interfaces/INote";
const isStringEmpty = (text: string):boolean =>{
    return (text == null || text == "");
}

const noteInput = document.getElementById('note-form__input') as HTMLInputElement;
const submitNoteButton = document.querySelector('.note-form') as HTMLFormElement;
const warningText = document.querySelector('.warning-text') as HTMLElement;
const noteListElement = document.querySelector('.note-list') as HTMLUListElement;
let noteList : Note[] = [];

const showElement = (element: HTMLElement):void =>{
    element.classList.remove('display-none');
    element.classList.add('display-visible');
}

const hideElement = (element: HTMLElement):void =>{
    element.classList.add('display-none');
    element.classList.remove('display-visible');
}

const createNewNote = (noteList: Note[], noteInput: HTMLInputElement): Note =>{
    return {
        id:  (noteList.length == 0) ? 0 : noteList[noteList.length -1].id+1,
        text:  noteInput.value,
    }
}


const editNote = (id:number):void =>{
    console.log(`editing ${id}`);
}

const deleteNote = (id:number):void =>{
    const filteredNotes = noteList.filter((note) =>{ 
        if(note.id !== id){return note}
    });
    noteList = filteredNotes;
    renderNoteList();
}

const createDeleteButton = (buttonId:number):HTMLButtonElement=>{
    const deleteButton:HTMLButtonElement = document.createElement('button');
    deleteButton.classList.add('button');
    deleteButton.classList.add('secondary-button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', (e)=>{
        deleteNote(buttonId);
    })
    return deleteButton;
}

const createEditButton = (buttonId:number):HTMLButtonElement =>{
    const editButton:HTMLButtonElement = document.createElement('button');
    editButton.classList.add('button');
    editButton.classList.add('primary-button');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', (e)=>{
       editNote(buttonId);
    })
    return editButton;
}

const createNoteText = (text:string):HTMLElement =>{
    const noteText:HTMLElement = document.createElement('p');
    noteText.innerHTML = text;
    noteText.classList.add('note-text');
    return noteText;
}

const createNote = (newNote: Note):HTMLElement =>{
    const note = document.createElement('li');
    note.classList.add('note');
    const buttonGroups = document.createElement('div');
    buttonGroups.classList.add('note-buttons');
    buttonGroups.append(createEditButton(newNote.id));
    buttonGroups.append(createDeleteButton(newNote.id));
    note.append(createNoteText(newNote.text));
    note.append(buttonGroups);
    return note;
}

const clearElement = (element:HTMLElement):void => {
    element.innerHTML = '';
}

const renderNoteList = ():void =>{
    clearElement(noteListElement);
    noteList.forEach(note => {
        noteListElement.append(createNote(note));
    });
}

submitNoteButton.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(isStringEmpty(noteInput.value)){
        showElement(warningText);
    }else{
        noteList.push(createNewNote(noteList,noteInput));
        hideElement(warningText);
        renderNoteList();
        noteInput.value = '';
    }
})