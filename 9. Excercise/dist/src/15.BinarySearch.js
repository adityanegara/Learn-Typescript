"use strict";
// Langkah untuk melakukan binary search adalah
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
const binarySearch = (binarySearchParams) => {
    if (binarySearchParams.high >= binarySearchParams.low) {
        const mid = binarySearchParams.low + Math.floor((binarySearchParams.high - 1) / 2);
        if (binarySearchParams.array[mid] == binarySearchParams.serachValue) {
            return mid;
        }
        if (binarySearchParams.array[mid] > binarySearchParams.serachValue) {
            return binarySearch({
                array: binarySearchParams.array,
                serachValue: binarySearchParams.serachValue,
                low: binarySearchParams.low,
                high: mid - 1,
            });
        }
        if (binarySearchParams.array[mid] < binarySearchParams.serachValue) {
            return binarySearch({
                array: binarySearchParams.array,
                serachValue: binarySearchParams.serachValue,
                low: mid + 1,
                high: binarySearchParams.high
            });
        }
    }
    return -1;
};
const find = (array, searchValue) => {
    if ('low' in array === false) {
        const paramsAsArrayOfNumber = array;
        const high = paramsAsArrayOfNumber.length - 1;
        const params = {
            array: [...array],
            serachValue: searchValue,
            low: 0,
            high,
        };
        console.log(params);
        console.log(binarySearch(params));
    }
    return 1;
};
exports.find = find;
let test = { array: [6], serachValue: 6, low: 0, high: 0 };
console.log(binarySearch(test));
