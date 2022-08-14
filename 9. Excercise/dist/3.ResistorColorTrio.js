"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addUnit = (color, unitColor) => {
    switch (unitColor) {
        case 'Black':
            return `${color} ohms`;
        case 'Brown':
            return `${color}0 ohms`;
        case 'Red':
            return `${color}00 ohms`;
        case 'Orange':
            return `${color} kiloohms`;
        case 'Yellow':
            return `${color}0 kiloohms`;
        case 'Green':
            return `${color}00 kiloohms`;
        case 'Blue':
            return `${color} megaohms`;
        case 'Violet':
            return `${color}0 megaohms`;
        case 'Grey':
            return `${color}00 megaohms`;
        default:
            return `${color} gigaohms`;
    }
};
const convertColorToNumber = (color) => {
    switch (color) {
        case 'Black':
            return '0';
        case 'Brown':
            return '1';
        case 'Red':
            return '2';
        case 'Orange':
            return '3';
        case 'Yellow':
            return '4';
        case 'Green':
            return '5';
        case 'Blue':
            return '6';
        case 'Violet':
            return '7';
        case 'Grey':
            return '8';
        default:
            return '9';
    }
};
const resistorColorTrio = (colors) => {
    let returnValue = '';
    if (colors.length < 1) {
        return 'Please Input a color';
    }
    else if (colors.length == 1) {
        return convertColorToNumber(colors[0]);
    }
    else if (colors.length == 2) {
        for (let i = 0; i < 2; i++) {
            returnValue += convertColorToNumber(colors[i]);
        }
        return `${returnValue} ohms`;
    }
    for (let i = 0; i < 3; i++) {
        if (i !== 2) {
            returnValue += convertColorToNumber(colors[i]);
        }
        else {
            returnValue = addUnit(returnValue, colors[i]);
        }
    }
    return returnValue;
};
console.log(resistorColorTrio([]));
console.log(resistorColorTrio(['Brown', 'Green']));
console.log(resistorColorTrio(['Orange', 'Orange', 'Black']));
console.log(resistorColorTrio(['Orange', 'Orange', 'Red']));
console.log(resistorColorTrio(['Orange', 'Orange', 'Orange']));
