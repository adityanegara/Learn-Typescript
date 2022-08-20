"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_ResistorColorDuo_1 = require("../src/2.ResistorColorDuo");
describe('Resistor Colors', () => {
    it('Should return 10 if given parameter Brown and Black', () => {
        expect((0, _2_ResistorColorDuo_1.resisterColorDuo)(['Brown', 'Black'])).toEqual("10");
    });
    it('Should return 68 if given parameter Blue and Gray', () => {
        expect((0, _2_ResistorColorDuo_1.resisterColorDuo)(['Blue', 'Gray'])).toEqual("68");
    });
    it('Should return 47 if given parameter Yellow and Violet', () => {
        expect((0, _2_ResistorColorDuo_1.resisterColorDuo)(['Yellow', 'Violet'])).toEqual("47");
    });
    it('Should return 33 if given parameter Orange and Orange', () => {
        expect((0, _2_ResistorColorDuo_1.resisterColorDuo)(['Orange', 'Orange'])).toEqual("33");
    });
    it('Should ignore additional colors', () => {
        expect((0, _2_ResistorColorDuo_1.resisterColorDuo)(['Green', 'Brown', 'Orange'])).toEqual("51");
    });
});
