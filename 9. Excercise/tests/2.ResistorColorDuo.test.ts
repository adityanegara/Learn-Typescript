import { resisterColorDuo } from "../src/2.ResistorColorDuo";

describe('Resistor Colors', () => {
    it('Should return 10 if given parameter Brown and Black', () => {
        expect(resisterColorDuo(['Brown', 'Black'])).toEqual("10");
    })
    it('Should return 68 if given parameter Blue and Gray', () => {
        expect(resisterColorDuo(['Blue', 'Gray'])).toEqual("68");
    })
    it('Should return 47 if given parameter Yellow and Violet', () => {
        expect(resisterColorDuo(['Yellow', 'Violet'])).toEqual("47");
    })
    it('Should return 33 if given parameter Orange and Orange', () => {
        expect(resisterColorDuo(['Orange', 'Orange'])).toEqual("33");
    })
    it('Should ignore additional colors', () => {
        expect(resisterColorDuo(['Green', 'Brown', 'Orange'])).toEqual("51");
    })
})