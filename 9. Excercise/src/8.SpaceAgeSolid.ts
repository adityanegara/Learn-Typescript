interface Planets {
    [key: string]: number,
}

const PLANET_AND_ORBITAL_RATIO: Planets = {
    'mercury': 0.24_084_67,
    'venus': 0.61_519_726,
    'earth': 1,
    'mars': 1.88_081_58,
    'jupiter': 11.8_626_15,
    'saturn': 29.4_474_98,
    'uranus': 84.0_168_46,
    'neptune': 164.79132
}

type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

export const spaceAge = (planet: Planet, seconds: number): number => {
    const AMOUNT_OF_SECOND_IN_A_YEAR = 31557600;
    return parseFloat(((seconds / AMOUNT_OF_SECOND_IN_A_YEAR) / PLANET_AND_ORBITAL_RATIO[planet]).toFixed(2));
}