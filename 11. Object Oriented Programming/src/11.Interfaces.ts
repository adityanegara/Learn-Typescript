interface People {
    name: string,
    id: number,
    talking(): void,
    waking(): void,
}
interface Teacher extends People {
    teaching(): void;
}

class Professor implements Teacher {
    constructor(public name: string, public id: number) { }
    talking(): void {
        console.log('Hello im a professor')
    }
    waking(): void {
        console.log('walking');
    }
    teaching(): void {
        console.log('Im teaching')
    }

}

export { }