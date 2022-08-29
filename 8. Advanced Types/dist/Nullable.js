"use strict";
const greetWithUppercase = (name) => {
    if (name) {
        console.log(`Hello ${name.toUpperCase()}`);
    }
    else {
        console.log('Hello');
    }
};
greetWithUppercase('Aditya');
greetWithUppercase(null);
