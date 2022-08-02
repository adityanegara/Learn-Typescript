"use strict";
function calculateTax(income) {
    let taxValue = 0;
    if (income < 50000) {
        taxValue = income * 1.2;
    }
    else {
        taxValue = income * 1.3;
    }
    return taxValue;
}
const calculateTaxWithYear = (income, year) => {
    if (income < 50000) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
};
