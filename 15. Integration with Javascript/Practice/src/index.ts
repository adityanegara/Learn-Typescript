import { isPalindromes } from "./isPalindromes";
import {isPalindromesJSDoc} from './isPalindromesJsDoc'
import {isPalindromesDeclarationFile} from './isPalindromesDeclarationFile'
import * as _ from 'lodash';

console.log(isPalindromes("A man, a plan, a canal. Panama"));
console.log(isPalindromesJSDoc("Aditya Negara"));
console.log(isPalindromesDeclarationFile("Wolo"));
const clone = _.clone([1,2,3]);
console.log(clone);
