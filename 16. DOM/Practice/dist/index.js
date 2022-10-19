"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isStringEmpty = (text) => {
    return (text == null || text == "");
};
const noteInput = document.getElementById('note-form__input');
const submitNoteButton = document.querySelector('.note-form');
const warningText = document.querySelector('.warning-text');
const noteListElement = document.querySelector('.note-list');
const noteList = [];
const showElement = (element) => {
    element.classList.remove('display-none');
    element.classList.add('display-visible');
};
const hideElement = (element) => {
    element.classList.add('display-none');
    element.classList.remove('display-visible');
};
const createNewNote = (noteList, noteInput) => {
    return {
        id: (noteList.length == 0) ? 0 : noteList[noteList.length - 1].id + 1,
        text: noteInput.value,
    };
};
const editNote = (id) => {
    console.log(`editing ${id}`);
};
const deleteNote = (id) => {
    console.log(`deleting ${id}`);
};
const createDeleteButton = (buttonId) => {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('button');
    deleteButton.classList.add('secondary-button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', (e) => {
        deleteNote(buttonId);
    });
    return deleteButton;
};
const createEditButton = (buttonId) => {
    const editButton = document.createElement('button');
    editButton.classList.add('button');
    editButton.classList.add('primary-button');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', (e) => {
        editNote(buttonId);
    });
    return editButton;
};
const createNoteText = (text) => {
    const noteText = document.createElement('p');
    noteText.innerHTML = text;
    noteText.classList.add('note-text');
    return noteText;
};
const createNote = (newNote) => {
    const note = document.createElement('li');
    note.classList.add('note');
    const buttonGroups = document.createElement('div');
    buttonGroups.classList.add('note-buttons');
    buttonGroups.append(createEditButton(newNote.id));
    buttonGroups.append(createDeleteButton(newNote.id));
    note.append(createNoteText(newNote.text));
    note.append(buttonGroups);
    return note;
};
const clearElement = (element) => {
    element.innerHTML = '';
};
const renderNoteList = () => {
    clearElement(noteListElement);
    noteList.forEach(note => {
        noteListElement.append(createNote(note));
    });
};
submitNoteButton.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isStringEmpty(noteInput.value)) {
        showElement(warningText);
    }
    else {
        noteList.push(createNewNote(noteList, noteInput));
        hideElement(warningText);
        renderNoteList();
        noteInput.value = '';
    }
});
