//Diberikan data sebagai berikut, tentukan type users
interface User {
    name: string,
    age: number,
    occupation: string
}

let users: User[] = [
    {
        name: 'Aditya Negara',
        age: 24,
        occupation: 'React JS Developer'
    },
    {
        name: 'Aura Puteri Negeri',
        age: 19,
        occupation: 'Student'
    },
    {
        name: 'Ayesha Puteri Nagari',
        age: 7,
        occupation: 'Student'
    }
]

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
type Birds = {
    fly: () => void,
}

type Fish = {
    swim: () => void,
}

type Pet = Birds | Fish;

// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc
type days = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

//simplify the following code snippers
const getUser = () => {
    return {
        address: {
            street: 'Jalan merbabu'
        }
    }
}
let user = getUser();
console.log(user?.address?.street)

// let x = foo !== null && foo !== undefined ?foo:bar();
const foo = 'test';
const bar = () => {
    return 'bar';
}
let x = foo ?? bar();

// What is the problem in this piece of code?
// let value:unknown = 'a'; console.log(value.toUpperCase());
//the problem is there is no checking wether the value is a string or not it shoudl be

let value: unknown;
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}