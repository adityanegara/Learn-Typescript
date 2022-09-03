import bobInterraction from "../src/11.Bob";

describe('Bob', () => {
    it('stating something', () => {
        const result = bobInterraction('Tom-ay-to, tom-aaaah-to.')
        expect(result).toEqual('Whatever.')
    })

    it('shouting', () => {
        const result = bobInterraction('WATCH OUT!')
        expect(result).toEqual('Whoa, chill out!')
    })

    it('shouting gibberish', () => {
        const result = bobInterraction('FCECDFCAAB')
        expect(result).toEqual('Whoa, chill out!')
    })

    it('asking a question', () => {
        const result = bobInterraction('Does this cryogenic chamber make me look fat?')
        expect(result).toEqual('Sure.')
    })

    it('asking a numeric question', () => {
        const result = bobInterraction('You are, what, like 15?')
        expect(result).toEqual('Sure.')
    })

    it('asking gibberish', () => {
        const result = bobInterraction('fffbbcbeab?')
        expect(result).toEqual('Sure.')
    })

    it('talking forcefully', () => {
        const result = bobInterraction("Let's go make out behind the gym!")
        expect(result).toEqual('Whatever.')
    })

    it('using acronyms in regular speech', () => {
        const result = bobInterraction("It's OK if you don't want to go to the DMV.")
        expect(result).toEqual('Whatever.')
    })
    it('forceful question', () => {
        const result = bobInterraction('WHAT THE HELL WERE YOU THINKING?')
        expect(result).toEqual("Calm down, I know what I'm doing!")
    })
    it('shouting numbers', () => {
        const result = bobInterraction('1, 2, 3 GO!')
        expect(result).toEqual('Whoa, chill out!')
    })
    it('no letters', () => {
        const result = bobInterraction('1, 2, 3')
        expect(result).toEqual('Whatever.')
    })
    it('question with no letters', () => {
        const result = bobInterraction('4?')
        expect(result).toEqual('Sure.')
    })
    it('shouting with special characters', () => {
        const result = bobInterraction('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!')
        expect(result).toEqual('Whoa, chill out!')
    })
    it('shouting with no exclamation mark', () => {
        const result = bobInterraction('I HATE THE DMV')
        expect(result).toEqual('Whoa, chill out!')
    })
    it('statement containing question mark', () => {
        const result = bobInterraction('Ending with ? means a question.')
        expect(result).toEqual('Whatever.')
    })
    it('prattling on', () => {
        const result = bobInterraction('Wait! Hang on.  Are you going to be OK?')
        expect(result).toEqual('Sure.')
    })
    it('silence', () => {
        const result = bobInterraction('')
        expect(result).toEqual('Fine. Be that way!')
    })
    it('prolonged silence', () => {
        const result = bobInterraction('   ')
        expect(result).toEqual('Fine. Be that way!')
    })
    it('alternate silence', () => {
        const result = bobInterraction('\t\t\t\t\t\t\t\t\t\t')
        expect(result).toEqual('Fine. Be that way!')
    })
    it('multiple line question', () => {
        const result = bobInterraction('\nDoes this cryogenic chamber make me look fat?\nNo.')
        expect(result).toEqual('Whatever.')
    })
    it('starting with whitespace', () => {
        const result = bobInterraction('         hmmmmmmm...')
        expect(result).toEqual('Whatever.')
    })
    it('ending with whitespace', () => {
        const result = bobInterraction('Okay if like my  spacebar  quite a bit?   ')
        expect(result).toEqual('Sure.')
    })
    it('other whitespace', () => {
        const result = bobInterraction('\n\r \t')
        expect(result).toEqual('Fine. Be that way!')
    })
    it('non-question ending with whitespace', () => {
        const result = bobInterraction('This is a statement ending with whitespace      ')
        expect(result).toEqual('Whatever.')
    })
})