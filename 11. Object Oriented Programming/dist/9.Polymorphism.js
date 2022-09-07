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
class Teacher extends People {
    constructor(teacherId, firstName, lastName) {
        super(firstName, lastName);
        this.teacherId = teacherId;
    }
    get introduce() {
        return `Hello my name is Professor ${this.firstName} ${this.lastName}`;
    }
}
const teacher = new Teacher(1, 'Aditya', 'Negara');
const student = new Student(2, 'Aura', 'Puteri');
function printNames(people) {
    for (let person of people) {
        console.log(person.introduce);
    }
}
printNames([teacher, student]);
