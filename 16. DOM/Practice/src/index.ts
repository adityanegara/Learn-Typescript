interface Note {
    id: number,
    text: string,
}

const noteInput = document.getElementById('note-form__input') as HTMLInputElement;
const submitNoteButton = document.querySelector('.note-form') as HTMLFormElement;
const warningText = document.querySelector('.warning-text') as HTMLElement;
const noteList : Note[] = [];


const isStringEmpty = (text: string):boolean =>{
    return (text == null || text == "");
}

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
        id:  (noteList[noteList.length -1]?.id) ? noteList[noteList.length -1].id : 0,
        text:  noteInput.value,
    }
}

submitNoteButton.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(isStringEmpty(noteInput.value)){
        showElement(warningText);
    }else{
        noteList.push(createNewNote(noteList,noteInput));
        console.log(noteList);
        hideElement(warningText);
    }
})