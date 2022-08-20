"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _3_ResistorColorTrio_1 = require("../src/3.ResistorColorTrio");
describe('Resistor Colors', () => {
    it('Should return 33 ohms if the parameter is Orange, Orange, and Black', () => {
        expect((0, _3_ResistorColorTrio_1.resistorColorTrio)(['Orange', 'Orange', 'Black'])).toEqual('33 ohms');
    });
    it('Should return 680 ohms if the parameter is Blue, Grey, and Brown', () => {
        expect((0, _3_ResistorColorTrio_1.resistorColorTrio)(['Blue', 'Grey', 'Brown'])).toEqual('680 ohms');
    });
    it('Should return 2 kiloohms ohms if the parameter is Red, Black, and Red', () => {
        expect((0, _3_ResistorColorTrio_1.resistorColorTrio)(['Red', 'Black', 'Red'])).toEqual('2 kiloohms');
    });
    it('Should return 51 kiloohms ohms if the parameter is Green, Brown, and Orange', () => {
        expect((0, _3_ResistorColorTrio_1.resistorColorTrio)(['Green', 'Brown', 'Orange'])).toEqual('51 kiloohms');
    });
    it('Should return 470 kiloohms ohms if the parameter is Green, Brown, and Orange', () => {
        expect((0, _3_ResistorColorTrio_1.resistorColorTrio)(['Yellow', 'Violet', 'Yellow'])).toEqual('470 kiloohms');
    });
});
