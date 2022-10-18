"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTaxJSDoc = void 0;
/**
 *
 * @param {number} income
 * @param {string} name
 * @returns {number}
 */
function calculateTaxJSDoc(income, name) {
    console.log(`Calculating tax for ${name}`);
    return income * .3;
}
exports.calculateTaxJSDoc = calculateTaxJSDoc;
