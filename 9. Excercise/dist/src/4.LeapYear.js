"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeapYear = void 0;
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
exports.isLeapYear = isLeapYear;
