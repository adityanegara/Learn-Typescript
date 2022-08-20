

const toRna = (dnaNucleotides: string): string => {
    let result: string = '';
    for (let i: number = 0; i < dnaNucleotides.length; i++) {
        let rnaNucleotide = convertDNANucleotideToRNANucleotide(dnaNucleotides.charAt(i));
        if (rnaNucleotide === false) {
            throw new Error('Invalid input DNA.');
        }
        result += rnaNucleotide;
    }
    return result;
}



const convertDNANucleotideToRNANucleotide = (dnaNucleotide: string): string | false => {
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
}

export { toRna }