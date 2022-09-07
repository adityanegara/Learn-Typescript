"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get introduce() {
        return `Hello my name is${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('Walking');
    }
    talk() {
        console.log('Talking');
    }
}
class Student extends People {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    learning() {
        console.log('learning');
    }
}
let student = new Student(1, 'Aditya', 'Negara');
console.log(student.introduce);
student.learning();
student.talk();
student.walk();
