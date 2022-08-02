const employee: {
    readonly id: number,
    name: string,
    faxMachineCode?: string
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Aditya',
    retire: (date: Date) =>{
        console.log(date);
    }
}
employee.name = 'Aditya';