"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTextToTwoDimensionalArray = exports.Matrix = void 0;
class Matrix {
    constructor(twoDimensionalArrayString) {
        this._getRow = (text) => {
            const textWithRemovedWhiteSpaces = text.split(/[ ,]+/).join(',');
            console.log(text);
            console.log(textWithRemovedWhiteSpaces);
            const rowString = textWithRemovedWhiteSpaces.split(",");
            return rowString.map((string) => {
                return parseInt(string);
            });
        };
        this._rows = this._convertStringToRowsAndColumn(twoDimensionalArrayString, '\n');
        this._columns = this._transpose(this._convertStringToRowsAndColumn(twoDimensionalArrayString, '\n'));
    }
    _transpose(matrix) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }
    _convertStringToRowsAndColumn(text, seperator) {
        const separatedText = text.split(seperator);
        const twoDimensionalArray = [];
        separatedText.forEach(text => {
            twoDimensionalArray.push(this._getRow(text));
        });
        return twoDimensionalArray;
    }
    get rows() {
        return this._rows;
    }
    get columns() {
        return this._columns;
    }
}
exports.Matrix = Matrix;
function convertTextToTwoDimensionalArray(text, seperator) {
    const separatedText = text.split(seperator);
    const twoDimensionalArray = [];
    separatedText.forEach(text => {
        twoDimensionalArray.push(getRow(text));
    });
    console.log(twoDimensionalArray);
}
exports.convertTextToTwoDimensionalArray = convertTextToTwoDimensionalArray;
const getRow = (text) => {
    const textWithRemovedWhiteSpaces = text.replace(/\s/g, '');
    const rowString = textWithRemovedWhiteSpaces.split("");
    return rowString.map((string) => {
        return parseInt(string);
    });
};
