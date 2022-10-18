import { calculateTax } from './tax';
import { calculateTaxJSDoc } from './jsDoc';
import * as _ from 'lodash';

let tax = calculateTax(3);
let taxJSDoc = calculateTaxJSDoc(1000, 'Aditya');
console.log(tax);
console.log(taxJSDoc);
_.clone([1,2,3]);
