export class Matrix {
    private _rows: number[][];
    private _columns: number[][];

    constructor(twoDimensionalArrayString: string) {
        this._rows = this._convertStringToRowsAndColumn(twoDimensionalArrayString, '\n');
        this._columns = this._transpose(this._convertStringToRowsAndColumn(twoDimensionalArrayString, '\n'));
    }

    private _transpose(matrix: number[][]) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    private _convertStringToRowsAndColumn(text: string, seperator: string): number[][] {
        const separatedText = text.split(seperator);
        const twoDimensionalArray: number[][] = [];
        separatedText.forEach(text => {
            twoDimensionalArray.push(this._getRow(text));
        });
        return twoDimensionalArray;
    }

    private _getRow = (text: string): number[] => {

        const textWithRemovedWhiteSpaces = text.split(/[ ,]+/).join(',');
        console.log(text);
        console.log(textWithRemovedWhiteSpaces);
        const rowString = textWithRemovedWhiteSpaces.split(",");
        return rowString.map((string) => {
            return parseInt(string);
        })
    }

    get rows(): number[][] {
        return this._rows;
    }

    get columns(): number[][] {
        return this._columns;
    }
}

export function convertTextToTwoDimensionalArray(text: string, seperator: string) {
    const separatedText = text.split(seperator);
    const twoDimensionalArray: number[][] = [];
    separatedText.forEach(text => {
        twoDimensionalArray.push(getRow(text));
    });
    console.log(twoDimensionalArray);

}

const getRow = (text: string): number[] => {
    const textWithRemovedWhiteSpaces = text.replace(/\s/g, '');
    const rowString = textWithRemovedWhiteSpaces.split("");
    return rowString.map((string) => {
        return parseInt(string);
    })
}