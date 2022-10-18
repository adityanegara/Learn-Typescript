/**
 * Calculating income tax.
 * @param {number} income - Net salary after expenses.
 * @param {string} name - Employee name.
 * @returns {number}
 */
 export function calculateTaxJSDoc(income, name)
 {  
     console.log(`Calculating tax for ${name}`)
     return income * .3;
 }