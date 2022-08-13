type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employess: Employee = {
    id: 1,
    name: 'Aditya Negara',
    retire: (date: Date) => {
        console.log(date);
    }
}