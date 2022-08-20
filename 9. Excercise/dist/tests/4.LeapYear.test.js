"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _4_LeapYear_1 = require("../src/4.LeapYear");
describe('A leap year', () => {
    it('year not divisible by 4 in common year', () => {
        expect((0, _4_LeapYear_1.isLeapYear)(2015)).toBe(false);
    });
    it('year divisible by 2, not divisible by 4 in common year', () => {
        expect((0, _4_LeapYear_1.isLeapYear)(1970)).toBe(false);
    });
    it('year divisible by 4, not divisible by 100 in leap year', () => {
        expect((0, _4_LeapYear_1.isLeapYear)(1996)).toBe(true);
    });
    it('year divisible by 4 and 5 is still a leap year', () => {
        expect((0, _4_LeapYear_1.isLeapYear)(1960)).toBe(true);
    });
    it('year divisible by 100, not divisible by 400 in common year', () => {
        expect((0, _4_LeapYear_1.isLeapYear)(2100)).toBe(false);
    });
    it('year divisible by 100 but not by 3 is still not a leap year', () => {
        expect((0, _4_LeapYear_1.isLeapYear)(1900)).toBe(false);
    });
    it('year divisible by 400 in leap year', () => {
        expect((0, _4_LeapYear_1.isLeapYear)(2000)).toBe(true);
    });
    it('year divisible by 400 but not by 125 is still a leap year', () => {
        expect((0, _4_LeapYear_1.isLeapYear)(2400)).toBe(true);
    });
    it('year divisible by 200, not divisible by 400 in common year', () => {
        expect((0, _4_LeapYear_1.isLeapYear)(1800)).toBe(false);
    });
});
