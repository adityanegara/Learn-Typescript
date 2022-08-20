"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRna = void 0;
const toRna = (dnaNucleotides) => {
    let result = '';
    for (let i = 0; i < dnaNucleotides.length; i++) {
        let rnaNucleotide = convertDNANucleotideToRNANucleotide(dnaNucleotides.charAt(i));
        if (rnaNucleotide === false) {
            throw new Error('Invalid input DNA.');
        }
        result += rnaNucleotide;
    }
    return result;
};
exports.toRna = toRna;
const convertDNANucleotideToRNANucleotide = (dnaNucleotide) => {
    switch (dnaNucleotide) {
        case 'C':
            return 'G';
        case 'G':
            return 'C';
        case 'A':
            return 'U';
        case 'T':
            return 'A';
        default:
            return false;
    }
};
