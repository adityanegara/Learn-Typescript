/**
 * Check if a text is palindrome or not
 * @param {string} text - a text
 * @returns {boolean} 
 */

export const isPalindromesJSDoc = (text) =>{
    const regex = /[\W_]/g;
    const lowerCaseRegexString = text.toLowerCase().replace(regex, '');
    const reverseString = lowerCaseRegexString.split('').reverse().join('');
    return reverseString === lowerCaseRegexString;
}