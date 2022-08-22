"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPangram = (text) => {
    const regex = /([a-z])(?!.*\1)/g;
    let test = (text.match(regex) || []).length >= 26;
    console.log((text.match(regex) || []).length);
    return test;
};
console.log(isPangram('Five quacking Zephyrs jolt my wax bed.'));
exports.default = isPangram;
