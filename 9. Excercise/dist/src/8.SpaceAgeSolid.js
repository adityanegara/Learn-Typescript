"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spaceAge = void 0;
const PLANET_AND_ORBITAL_RATIO = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
};
const spaceAge = (planet, seconds) => {
    const AMOUNT_OF_SECOND_IN_A_YEAR = 31557600;
    return parseFloat(((seconds / AMOUNT_OF_SECOND_IN_A_YEAR) / PLANET_AND_ORBITAL_RATIO[planet]).toFixed(2));
};
exports.spaceAge = spaceAge;
