"use strict";
const render = (document) => {
    if (typeof document === 'string') {
        console.log('im a string');
    }
    else {
        console.log('im not a string');
    }
};
