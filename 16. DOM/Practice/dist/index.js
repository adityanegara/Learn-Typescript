"use strict";
const noteInput = document.getElementById('note-form__input');
const submitNoteButton = document.querySelector('.note-form');
const warningText = document.querySelector('.warning-text');
const noteList = [];
const isStringEmpty = (text) => {
    return (text == null || text == "");
};
const showElement = (element) => {
    element.classList.remove('display-none');
    element.classList.add('display-visible');
};
const hideElement = (element) => {
    element.classList.add('display-none');
    element.classList.remove('display-visible');
};
const createNewNote = (noteList, noteInput) => {
    var _a;
    return {
        id: ((_a = noteList[noteList.length - 1]) === null || _a === void 0 ? void 0 : _a.id) ? noteList[noteList.length - 1].id : 0,
        text: noteInput.value,
    };
};
submitNoteButton.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isStringEmpty(noteInput.value)) {
        showElement(warningText);
    }
    else {
        noteList.push(createNewNote(noteList, noteInput));
        console.log(noteList);
        hideElement(warningText);
    }
});
