import { twoFer } from "../src/1.TwoFer";

describe('TwoFer', () => {
    it('no name given', () => {
        const expected = 'One for you, one for me.';
        expect(twoFer()).toEqual(expected);
    })
    it('a name given', () => {
        const expected = 'One for Adit, one for me.';
        expect(twoFer('Adit')).toEqual(expected);
    })
    it('another name given', () => {
        const expected = 'One for Ayesha, one for me.';
        expect(twoFer('Ayesha')).toEqual(expected);
    })
})