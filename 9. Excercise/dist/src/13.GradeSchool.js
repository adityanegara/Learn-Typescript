"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeSchool = void 0;
class GradeSchool {
    // this.schoolGrade = { 3: ['adit', 'aura', 'ayesha'] }
    constructor() {
        this.students = {};
    }
    roster() {
        return this.students;
    }
    add(studentName, grade) {
        if (grade in this.students) {
            if (!this.isStudentExist(studentName)) {
                const previousStudents = Object.assign({}, this.students);
                const previousStudentsGrade = previousStudents[grade];
                const newStudentsGrade = this.sortStudentsGradeAlphabetically([...previousStudentsGrade, studentName]);
                const afterStudents = Object.assign(Object.assign({}, previousStudents), { [grade]: newStudentsGrade });
                this.students = afterStudents;
            }
            else {
                return;
            }
        }
        else {
            if (!this.isStudentExist(studentName)) {
                this.students = Object.assign(Object.assign({}, this.students), { [grade]: [studentName] });
            }
            else {
                return;
            }
        }
    }
    grade(grade) {
        return (grade in this.students) ? this.students[grade] : [];
    }
    sortStudentsGradeAlphabetically(students) {
        return students.sort();
    }
    isStudentExist(newStudent) {
        for (const property in this.students) {
            if (this.students[property].find(student => student === newStudent)) {
                console.log('student exist');
                return true;
            }
        }
        console.log('student doesnt exist');
        return false;
    }
}
exports.GradeSchool = GradeSchool;
