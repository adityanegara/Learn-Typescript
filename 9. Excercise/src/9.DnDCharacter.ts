export class DnDCharacter {
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly intelligence: number;
    readonly wisdom: number;
    readonly charisma: number;
    readonly hitpoints: number;
    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }

    public static generateAbilityScore(): number {
        const rollingDices: number[] = [getRandomNumber(1, 6), getRandomNumber(1, 6), getRandomNumber(1, 6), getRandomNumber(1, 6)];
        const sortRollingDices = rollingDices.sort(function (firstDice, secondDice) {
            return secondDice - firstDice;
        });
        return sortRollingDices.slice(0, 3).reduce((a, b) => a + b, 0)
    }

    public static getModifierFor(abilityValue: number): number {
        return round((abilityValue - 10) / 2)
    }
}

const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function round(num: number): number {
    return (num >= 0) ? Math.floor(Math.abs(num)) : -1 * Math.round(Math.abs(num));
}