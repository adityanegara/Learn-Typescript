"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resistorColorTrio = void 0;
const addUnit = (color, unitColor) => {
    let returnValue = '';
    switch (unitColor) {
        case 'Black':
            returnValue = `${color} ohms`;
            break;
        case 'Brown':
            returnValue = `${color}0 ohms`;
            break;
        case 'Red':
            returnValue = `${color}00 ohms`;
            break;
        case 'Orange':
            returnValue = `${color} kiloohms`;
            break;
        case 'Yellow':
            returnValue = `${color}0 kiloohms`;
            break;
        case 'Green':
            returnValue = `${color}00 kiloohms`;
            break;
        case 'Blue':
            returnValue = `${color} megaohms`;
            break;
        case 'Violet':
            returnValue = `${color}0 megaohms`;
            break;
        case 'Grey':
            returnValue = `${color}00 megaohms`;
            break;
        default:
            returnValue = `${color} gigaohms`;
            break;
    }
    const numberOfZero = (returnValue.match(/0/g) || []).length; //logs 3
    if (numberOfZero === 3) {
        color = color.replaceAll('0', '');
        returnValue = `${color} kiloohms`;
    }
    else if (numberOfZero === 6) {
        color = color.replaceAll('0', '');
        returnValue = `${color} megaohms`;
    }
    else if (numberOfZero === 3) {
        color = color.replaceAll('0', '');
        returnValue = `${color} gigaohms`;
    }
    return returnValue;
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
exports.resistorColorTrio = resistorColorTrio;
