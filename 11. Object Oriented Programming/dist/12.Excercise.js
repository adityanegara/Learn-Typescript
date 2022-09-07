"use strict";
//1) Define a class called Logger that takes the name of a 
// file in its constructor and provides a method for writing messages to that file. 
// Don’t worry about the actual file I/O operations. Just define the class with the right members
class Logger {
    constructor(_file) {
        this._file = _file;
    }
    set file(file) { }
}
//2) Given the People class below, create a getter for getting the full name of a person
class People {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const people = new People('Adit', 'Negara');
console.log(people.fullName);
