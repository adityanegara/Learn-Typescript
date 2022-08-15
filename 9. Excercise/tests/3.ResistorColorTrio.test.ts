import { resistorColorTrio } from "../src/3.ResistorColorTrio";

describe('Resistor Colors', () => {
    it('Should return 33 ohms if the parameter is Orange, Orange, and Black', () => {
        expect(resistorColorTrio(['Orange', 'Orange', 'Black'])).toEqual('33 ohms');
    })
    it('Should return 680 ohms if the parameter is Blue, Grey, and Brown', () => {
        expect(resistorColorTrio(['Blue', 'Grey', 'Brown'])).toEqual('680 ohms');
    })
    it('Should return 2 kiloohms ohms if the parameter is Red, Black, and Red', () => {
        expect(resistorColorTrio(['Red', 'Black', 'Red'])).toEqual('2 kiloohms');
    })
    it('Should return 51 kiloohms ohms if the parameter is Green, Brown, and Orange', () => {
        expect(resistorColorTrio(['Green', 'Brown', 'Orange'])).toEqual(
            '51 kiloohms'
        )
    })
    it('Should return 470 kiloohms ohms if the parameter is Green, Brown, and Orange', () => {
        expect(resistorColorTrio(['Yellow', 'Violet', 'Yellow'])).toEqual(
            '470 kiloohms'
        )
    })

})