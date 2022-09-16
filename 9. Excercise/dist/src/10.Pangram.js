"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPangram = (text) => {
    const regex = /([a-z])(?!.*\1)/g;
    const toLowerCaseText = text.toLowerCase();
    return (toLowerCaseText.match(regex) || []).length === 26;
};
exports.default = isPangram;
