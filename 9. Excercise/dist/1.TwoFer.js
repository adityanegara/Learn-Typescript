"use strict";
const TwoFer = (name) => {
    return name ? `One for ${name}, one for me.`
        : `One for you, one for me.`;
};
console.log(TwoFer('Alice'));
console.log(TwoFer('Bob'));
console.log(TwoFer());
console.log(TwoFer('Zaratustha'));
