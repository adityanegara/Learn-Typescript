"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnDCharacter = void 0;
class DnDCharacter {
    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
    static generateAbilityScore() {
        const rollingDices = [getRandomNumber(1, 6), getRandomNumber(1, 6), getRandomNumber(1, 6), getRandomNumber(1, 6)];
        const sortRollingDices = rollingDices.sort(function (firstDice, secondDice) {
            return secondDice - firstDice;
        });
        return sortRollingDices.slice(0, 3).reduce((a, b) => a + b, 0);
    }
    static getModifierFor(abilityValue) {
        return round((abilityValue - 10) / 2);
    }
}
exports.DnDCharacter = DnDCharacter;
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
function round(num) {
    return (num >= 0) ? Math.floor(Math.abs(num)) : -1 * Math.round(Math.abs(num));
}
