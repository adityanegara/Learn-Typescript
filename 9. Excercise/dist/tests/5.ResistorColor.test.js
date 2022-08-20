"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _5_ResistorColor_1 = require("../src/5.ResistorColor");
describe('color code', () => {
    it('Black', () => {
        expect((0, _5_ResistorColor_1.colorCode)('black')).toEqual(0);
    });
    it('White', () => {
        expect((0, _5_ResistorColor_1.colorCode)('white')).toEqual(9);
    });
    it('Orange', () => {
        expect((0, _5_ResistorColor_1.colorCode)('orange')).toEqual(3);
    });
});
describe('Colors', () => {
    it('returns all colors', () => {
        expect(_5_ResistorColor_1.COLORS).toEqual([
            'black',
            'brown',
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'violet',
            'grey',
            'white',
        ]);
    });
});
