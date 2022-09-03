"use strict";
var _a;
let users = [
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
];
const getUser = () => {
    return {
        address: {
            street: 'Jalan merbabu'
        }
    };
};
let user = getUser();
console.log((_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.street);
const foo = 'test';
const bar = () => {
    return 'bar';
};
let x = foo !== null && foo !== void 0 ? foo : bar();
let value;
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
