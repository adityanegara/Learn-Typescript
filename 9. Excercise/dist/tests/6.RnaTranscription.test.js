"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _6_RnaTranscription_1 = require("../src/6.RnaTranscription");
describe('Transcriptor', () => {
    it('transcribes cytosine to guanine', () => {
        expect((0, _6_RnaTranscription_1.toRna)('C')).toEqual('G');
    });
    it('transcribes guanine to cytosine', () => {
        expect((0, _6_RnaTranscription_1.toRna)('G')).toEqual('C');
    });
    it('transcribes adenine to uracil', () => {
        expect((0, _6_RnaTranscription_1.toRna)('A')).toEqual('U');
    });
    it('transcribes thymine to adenine', () => {
        expect((0, _6_RnaTranscription_1.toRna)('T')).toEqual('A');
    });
    it('transcribes all dna nucleotides to their rna complements', () => {
        expect((0, _6_RnaTranscription_1.toRna)('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
    });
    it('correctly handles invalid input', () => {
        expect(() => (0, _6_RnaTranscription_1.toRna)('U')).toThrowError('Invalid input DNA.');
    });
    it('correctly handles completely invalid input', () => {
        expect(() => (0, _6_RnaTranscription_1.toRna)('XXX')).toThrowError('Invalid input DNA.');
    });
    it('correctly handles partially invalid input', () => {
        expect(() => (0, _6_RnaTranscription_1.toRna)('ACGTXXXCTTAA')).toThrowError('Invalid input DNA.');
    });
});
