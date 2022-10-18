"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tax_1 = require("./tax");
const jsDoc_1 = require("./jsDoc");
let tax = (0, tax_1.calculateTax)(3);
let taxJSDoc = (0, jsDoc_1.calculateTaxJSDoc)(1000, 'Aditya');
console.log(tax);
console.log(taxJSDoc);
