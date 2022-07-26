"use strict";
let helloWorld = "Hello World";
const adit = {
    name: 'Adit',
    age: 24,
    address: 'Jalan Gunuk'
};
const car = {
    licensePlate: 123,
    numberOfWheel: 4,
    owner: adit
};
const user = {
    name: 'Aditya',
    id: 3
};
class Insect {
    constructor(name, numberOfLeg) {
        this.name = name;
        this.numberOfLeg = numberOfLeg;
    }
}
const milipedes = new Insect("milipedes", 1000);
const getAdminUser = () => {
    return user;
};
function deleteUser(user) {
}
