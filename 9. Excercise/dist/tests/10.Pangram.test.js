"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _10_Pangram_1 = __importDefault(require("../src/10.Pangram"));
describe('Pangram()', () => {
    it('empty sentence', () => {
        expect((0, _10_Pangram_1.default)('')).toBe(false);
    });
    it('perfect lower case', () => {
        expect((0, _10_Pangram_1.default)('abcdefghijklmnopqrstuvwxyz')).toBe(true);
    });
    it('only lower case', () => {
        expect((0, _10_Pangram_1.default)('the quick brown fox jumps over the lazy dog')).toBe(true);
    });
    it("missing the letter 'x'", () => {
        expect((0, _10_Pangram_1.default)('a quick movement of the enemy will jeopardize five gunboats')).toBe(false);
    });
    it("missing the letter 'h'", () => {
        expect((0, _10_Pangram_1.default)('five boxing wizards jump quickly at it')).toBe(false);
    });
    it('with underscores', () => {
        expect((0, _10_Pangram_1.default)('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(true);
    });
    it('with numbers', () => {
        expect((0, _10_Pangram_1.default)('the 1 quick brown fox jumps over the 2 lazy dogs')).toBe(true);
    });
    it('missing letters replaced by numbers', () => {
        expect((0, _10_Pangram_1.default)('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false);
    });
    it('mixed case and punctuation', () => {
        expect((0, _10_Pangram_1.default)('"Five quacking Zephyrs jolt my wax bed."')).toBe(true);
    });
    it('case insensitive', () => {
        expect((0, _10_Pangram_1.default)('the quick brown fox jumps over with lazy FX')).toBe(false);
    });
});
