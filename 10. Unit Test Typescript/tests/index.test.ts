import { calculatorKata } from '../src/index';

describe('testing index file', () => {
    test('empty string should result in zero', () => {
        expect(calculatorKata('')).toBe(0);
    });
});