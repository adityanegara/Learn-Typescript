"use strict";
const spaceAge = (planet, seconds) => {
    const AMOUNT_OF_SECOND_IN_A_YEAR = 31536000;
    return seconds / AMOUNT_OF_SECOND_IN_A_YEAR;
};
console.log(spaceAge('earth', 1000000000));
