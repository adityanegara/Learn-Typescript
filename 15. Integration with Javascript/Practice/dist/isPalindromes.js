"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindromes = void 0;
const isPalindromes = (text) => {
    const regex = /[\W_]/g;
    const lowerCaseRegexString = text.toLowerCase().replace(regex, '');
    const reverseString = lowerCaseRegexString.split('').reverse().join('');
    return reverseString === lowerCaseRegexString;
};
exports.isPalindromes = isPalindromes;
