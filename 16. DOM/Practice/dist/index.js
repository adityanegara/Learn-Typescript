"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isStringEmpty = (text) => {
    return (text == null || text == "");
};
const noteInput = document.getElementById('note-form__input');
const submitNoteButton = document.querySelector('.note-form');
const warningText = document.querySelector('.warning-text');
const noteListElement = document.querySelector('.note-list');
let noteList = [];
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
        isDone: false,
    };
};
const undoneNote = (id) => {
    const undoneNote = noteList.map(note => {
        if (note.id == id) {
            return Object.assign(Object.assign({}, note), { isDone: false });
        }
        else {
            return note;
        }
    });
    noteList = undoneNote;
    renderNoteList();
};
const doneNote = (id) => {
    const doneedNote = noteList.map(note => {
        if (note.id == id) {
            return Object.assign(Object.assign({}, note), { isDone: true });
        }
        else {
            return note;
        }
    });
    noteList = doneedNote;
    console.log(noteList);
    renderNoteList();
};
const deleteNote = (id) => {
    const filteredNotes = noteList.filter((note) => {
        if (note.id !== id) {
            return note;
        }
    });
    noteList = filteredNotes;
    renderNoteList();
};
const createDeleteButton = (buttonId) => {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('button');
    deleteButton.classList.add('secondary-button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteNote(buttonId);
    });
    return deleteButton;
};
const createUndoneButton = (id) => {
    const doneButton = document.createElement('button');
    doneButton.classList.add('button');
    doneButton.classList.add('primary-button');
    doneButton.innerHTML = 'Undone';
    doneButton.addEventListener('click', () => {
        undoneNote(id);
    });
    return doneButton;
};
const createDoneButton = (id) => {
    const doneButton = document.createElement('button');
    doneButton.classList.add('button');
    doneButton.classList.add('primary-button');
    doneButton.innerHTML = 'Done';
    doneButton.addEventListener('click', () => {
        doneNote(id);
    });
    return doneButton;
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
    if (newNote.isDone) {
        buttonGroups.append(createUndoneButton(newNote.id));
    }
    else {
        buttonGroups.append(createDoneButton(newNote.id));
    }
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
