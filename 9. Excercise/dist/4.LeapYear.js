"use strict";
const isLeapYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};
console.log(isLeapYear(2015));
console.log(isLeapYear(1970));
console.log(isLeapYear(1996));
console.log(isLeapYear(1960));
console.log(isLeapYear(2100));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2400));
console.log(isLeapYear(1800));
