"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _8_SpaceAgeSolid_1 = require("../src/8.SpaceAgeSolid");
describe('Space Age', () => {
    it('age on Earth', () => {
        expect((0, _8_SpaceAgeSolid_1.spaceAge)('earth', 1000000000)).toEqual(31.69);
    });
    it('age on Mercury', () => {
        expect((0, _8_SpaceAgeSolid_1.spaceAge)('mercury', 2134835688)).toEqual(280.88);
    });
    it('age on Venus', () => {
        expect((0, _8_SpaceAgeSolid_1.spaceAge)('venus', 189839836)).toEqual(9.78);
    });
    it('age on Mars', () => {
        expect((0, _8_SpaceAgeSolid_1.spaceAge)('mars', 2129871239)).toEqual(35.88);
    });
    it('age on Jupiter', () => {
        expect((0, _8_SpaceAgeSolid_1.spaceAge)('jupiter', 901876382)).toEqual(2.41);
    });
    it('age on Saturn', () => {
        expect((0, _8_SpaceAgeSolid_1.spaceAge)('saturn', 2000000000)).toEqual(2.15);
    });
    it('age on Uranus', () => {
        expect((0, _8_SpaceAgeSolid_1.spaceAge)('uranus', 1210123456)).toEqual(0.46);
    });
    it('age on Neptune', () => {
        expect((0, _8_SpaceAgeSolid_1.spaceAge)('neptune', 1821023456)).toEqual(0.35);
    });
});
