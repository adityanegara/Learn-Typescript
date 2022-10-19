"use strict";
/**
 * Check if a text is palindrome or not
 * @param {string} text - a text
 * @returns {boolean}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindromesJSDoc = void 0;
const isPalindromesJSDoc = (text) => {
    const regex = /[\W_]/g;
    const lowerCaseRegexString = text.toLowerCase().replace(regex, '');
    const reverseString = lowerCaseRegexString.split('').reverse().join('');
    return reverseString === lowerCaseRegexString;
};
exports.isPalindromesJSDoc = isPalindromesJSDoc;
