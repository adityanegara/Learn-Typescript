class People {

    constructor(public firstName: string, public lastName: string) { }

    get introduce(): string {
        return `Hello my name is${this.firstName} ${this.lastName}`
    }

    walk() {
        console.log('Walking');
    }

    protected talk() {
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
        this.talk();
        console.log('learning');
    }
}

class Teacher extends People {
    constructor(
        public teacherId: number,
        firstName: string,
        lastName: string,
    ) {
        super(firstName, lastName)
    }

    override get introduce(): string {
        return `Hello my name is Professor ${this.firstName} ${this.lastName}`
    }
}

const teacher = new Teacher(1, 'Aditya', 'Negara');
const student = new Student(2, 'Aura', 'Puteri');


function printNames(people: People[]) {
    for (let person of people) {
        console.log(person.introduce)
    }
}

printNames([teacher, student]);

export { }