"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_TwoFer_1 = require("../src/1.TwoFer");
describe('TwoFer', () => {
    it('no name given', () => {
        const expected = 'One for you, one for me.';
        expect((0, _1_TwoFer_1.twoFer)()).toEqual(expected);
    });
    it('a name given', () => {
        const expected = 'One for Adit, one for me.';
        expect((0, _1_TwoFer_1.twoFer)('Adit')).toEqual(expected);
    });
    it('another name given', () => {
        const expected = 'One for Ayesha, one for me.';
        expect((0, _1_TwoFer_1.twoFer)('Ayesha')).toEqual(expected);
    });
});
