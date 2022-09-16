"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _15_BinarySearch_1 = require("../src/15.BinarySearch");
describe('Binary Search', () => {
    it('finds a value in an array with one element', () => {
        expect((0, _15_BinarySearch_1.find)([6], 6)).toEqual(0);
    });
    it('finds a value in the middle of an array', () => {
        const array = [1, 3, 4, 6, 8, 9, 11];
        expect((0, _15_BinarySearch_1.find)(array, 6)).toEqual(3);
    });
    it('finds a value at the beginning of an array', () => {
        const array = [1, 3, 4, 6, 8, 9, 11];
        expect((0, _15_BinarySearch_1.find)(array, 1)).toEqual(0);
    });
    it('finds a value at the end of an array', () => {
        const array = [1, 3, 4, 6, 8, 9, 11];
        expect((0, _15_BinarySearch_1.find)(array, 11)).toEqual(6);
    });
    it('nothing is found in an empty array', () => {
        expect(() => (0, _15_BinarySearch_1.find)([], 1)).toThrow(new Error('Value not in array'));
    });
});
