type Color = 'Black' | 'Brown' | 'Red' | 'Orange' | 'Yellow' |
    'Green' | 'Blue' | 'Violet' | 'Grey' | 'White';

const convertColorToNumber = (color: Color): string => {
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
}

const resisterColorDuo = (colors: Color[]): string => {
    if (colors.length <= 0) {
        return 'Please input color';
    } else if (colors.length == 1) {
        return convertColorToNumber(colors[0]);
    } else {
        let returnValue: string = '';
        for (let i = 0; i < 2; i++) {
            returnValue += convertColorToNumber(colors[i])
        }
        return returnValue;
    }
}


console.log(resisterColorDuo([]));
console.log(resisterColorDuo(['Brown', 'Green']));
console.log(resisterColorDuo(['Black', 'Brown', 'Red']));