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
        isDone: false,
    }
}

const undoneNote = (id: number):void =>{
    const undoneNote = noteList.map(note => {
        if(note.id == id){
            return {...note, isDone: false}
        }else{
            return note;
        }
           
    });
    noteList = undoneNote;
    renderNoteList();
}

const doneNote = (id: number):void =>{
    const doneedNote = noteList.map(note => {
        if(note.id == id){
            return {...note, isDone: true}
        }else{
            return note;
        }
           
    });
    noteList = doneedNote;
    renderNoteList();
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
    deleteButton.addEventListener('click', ()=>{
        deleteNote(buttonId);
    })
    return deleteButton;
}

const createUndoneButton = (id: number):HTMLButtonElement =>{
    const doneButton:HTMLButtonElement = document.createElement('button');
    doneButton.classList.add('button');
    doneButton.classList.add('primary-button');
    doneButton.innerHTML = 'Undone';
    doneButton.addEventListener('click', ()=>{
       undoneNote(id);
    })
    return doneButton;
}


const createDoneButton = (id: number):HTMLButtonElement =>{
    const doneButton:HTMLButtonElement = document.createElement('button');
    doneButton.classList.add('button');
    doneButton.classList.add('primary-button');
    doneButton.innerHTML = 'Done';
    doneButton.addEventListener('click', ()=>{
       doneNote(id);
    })
    return doneButton;
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
    if(newNote.isDone){
        buttonGroups.append(createUndoneButton(newNote.id));
    }else{
        buttonGroups.append(createDoneButton(newNote.id));
    }
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