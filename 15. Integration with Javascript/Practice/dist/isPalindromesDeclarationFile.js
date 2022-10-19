"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindromesDeclarationFile = void 0;
const isPalindromesDeclarationFile = (text) => {
    const regex = /[\W_]/g;
    const lowerCaseRegexString = text.toLowerCase().replace(regex, '');
    const reverseString = lowerCaseRegexString.split('').reverse().join('');
    return reverseString === lowerCaseRegexString;
};
exports.isPalindromesDeclarationFile = isPalindromesDeclarationFile;
