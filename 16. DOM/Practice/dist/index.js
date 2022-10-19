"use strict";
const noteInput = document.getElementById('note-form__input');
const submitNoteButton = document.querySelector('.note-form');
const warningText = document.querySelector('.warning-text');
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
submitNoteButton.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isStringEmpty(noteInput.value)) {
        showElement(warningText);
    }
    else {
        hideElement(warningText);
    }
});
