export const isPalindromesDeclarationFile = (text) =>{
    const regex = /[\W_]/g;
    const lowerCaseRegexString = text.toLowerCase().replace(regex, '');
    const reverseString = lowerCaseRegexString.split('').reverse().join('');
    return reverseString === lowerCaseRegexString;
}