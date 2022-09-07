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
console.log(teacher.introduce)

export { }