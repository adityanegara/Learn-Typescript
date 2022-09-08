class Employee<I>{
    constructor(public id: I, public name: string) { }
}

const employee = new Employee<string>('123', 'adit');