class People {

    constructor(public firstName: string, public lastName: string) { }

    get introduce(): string {
        return `Hello my name is${this.firstName} ${this.lastName}`
    }

    walk() {
        console.log('Walking');
    }

    talk() {
        console.log('Talking');
    }
}


class Student extends People {
    constructor(
        public studentId: number
        , firstName: string,
        lastName: string) {
        super(firstName, lastName)
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

export { }