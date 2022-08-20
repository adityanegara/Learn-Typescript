type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';


export const spaceAge = (planet: Planet, seconds: number): number => {
    const AMOUNT_OF_SECOND_IN_A_YEAR = 31557600;
    const ORBITAL_PERIOD_MERCURY = 0.24_084_67;
    const ORBITAL_PERIOD_VENUS = 0.61519726;
    const ORBITAL_PERIOD_MARS = 1.8808158;
    const ORBITAL_PERIOD_JUPITER = 11.862615;
    const ORBITAL_PERIOD_SATURN = 29.447498;
    const ORBITAL_PERIOD_URANUS = 84.016846;
    const ORBITAL_PERIOD_NEPTUNE = 164.79132;

    const yearInEarth = seconds / AMOUNT_OF_SECOND_IN_A_YEAR
    switch (planet) {
        case 'earth':
            return parseFloat(yearInEarth.toFixed(2));
        case 'mercury':
            const yearInMercury = yearInEarth / ORBITAL_PERIOD_MERCURY;
            return parseFloat(yearInMercury.toFixed(2));
        case 'venus':
            const yearInVenus = yearInEarth / ORBITAL_PERIOD_VENUS;
            return parseFloat(yearInVenus.toFixed(2));
        case 'mars':
            const yearInMars = yearInEarth / ORBITAL_PERIOD_MARS;
            return parseFloat(yearInMars.toFixed(2));
        case 'jupiter':
            const yearInJupiter = yearInEarth / ORBITAL_PERIOD_JUPITER;
            return parseFloat(yearInJupiter.toFixed(2));
        case 'saturn':
            const yearInSaturn = yearInEarth / ORBITAL_PERIOD_SATURN;
            return parseFloat(yearInSaturn.toFixed(2));
        case 'uranus':
            const yearInUranus = yearInEarth / ORBITAL_PERIOD_URANUS;
            return parseFloat(yearInUranus.toFixed(2));
        case 'neptune':
            const yearInNeptune = yearInEarth / ORBITAL_PERIOD_NEPTUNE;
            return parseFloat(yearInNeptune.toFixed(2));
    }
}

