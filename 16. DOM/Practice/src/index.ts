const noteInput = document.getElementById('note-form__input') as HTMLInputElement;
const submitNoteButton = document.querySelector('.note-form') as HTMLFormElement;
const warningText = document.querySelector('.warning-text') as HTMLElement;

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


submitNoteButton.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(isStringEmpty(noteInput.value)){
        showElement(warningText);
    }else{
        hideElement(warningText);
    }
})