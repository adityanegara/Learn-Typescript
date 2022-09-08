interface SchoolGrade {
    [x: number]: string[];
}

export class GradeSchool {
    private students: SchoolGrade
    // this.schoolGrade = { 3: ['adit', 'aura', 'ayesha'] }
    constructor() {
        this.students = {}
    }

    roster(): SchoolGrade {
        return this.students;
    }

    add(studentName: string, grade: number) {
        if (grade in this.students) {
            if (!this.isStudentExist(studentName)) {
                const previousStudents: SchoolGrade = { ...this.students };
                const previousStudentsGrade: string[] = previousStudents[grade];
                const newStudentsGrade: string[] = this.sortStudentsGradeAlphabetically([...previousStudentsGrade, studentName]);
                const afterStudents: SchoolGrade = { ...previousStudents, [grade]: newStudentsGrade };
                this.students = afterStudents;
            } else {
                return;
            }

        } else {
            if (!this.isStudentExist(studentName)) {
                this.students = { ...this.students, [grade]: [studentName] };
            } else {
                return;
            }

        }
    }


    grade(grade: number): string[] {
        return (grade in this.students) ? this.students[grade] : [];
    }

    private sortStudentsGradeAlphabetically(students: string[]): string[] {
        return students.sort();
    }

    private isStudentExist(newStudent: string): boolean {
        for (const property in this.students) {
            if (this.students[property].find(student => student === newStudent)) {
                console.log('student exist')
                return true;
            }
        }
        console.log('student doesnt exist')
        return false;
    }
}