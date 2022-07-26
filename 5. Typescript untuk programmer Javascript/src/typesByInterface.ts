let helloWorld = "Hello World";

interface User {
    name: string,
    id: number,
}
// Inherited
interface People{
    name: string,
    age: number,
    address: string,
}

interface vehicle {
    licensePlate: number,
    numberOfWheel: number,
    owner: People,
}

const adit: People={
    name: 'Adit',
    age: 24,
    address: 'Jalan Gunuk'
}

const car : vehicle = {
    licensePlate: 123,
    numberOfWheel: 4,
    owner: adit
}

const user: User= {
    name: 'Aditya',
    id: 3
}
//In classes
interface Animal{
    name: string,
    numberOfLeg: number,
}

class Insect {
    name: string;
    numberOfLeg: number;
    constructor(name: string, numberOfLeg:  number) {
        this.name = name;
        this.numberOfLeg = numberOfLeg;
      }
}

const milipedes: Animal = new Insect("milipedes", 1000);

//Function

const getAdminUser = () : User => {
    return user;
}
   
  function deleteUser(user: User) {
    // ...
  }