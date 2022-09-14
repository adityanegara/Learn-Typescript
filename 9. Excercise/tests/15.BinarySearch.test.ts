import { find } from '../src/15.BinarySearch';
describe('Binary Search', () => {
    it('finds a value in an array with one element', () => {
        expect(find([6], 6)).toEqual(0)
    })
    it('finds a value in the middle of an array', () => {
        const array = [1, 3, 4, 6, 8, 9, 11]
        expect(find(array, 6)).toEqual(3)
    })
    it('finds a value at the beginning of an array', () => {
        const array = [1, 3, 4, 6, 8, 9, 11];
        expect(find(array, 1)).toEqual(0)
    })

    it('finds a value at the end of an array', () => {
        const array = [1, 3, 4, 6, 8, 9, 11]
        expect(find(array, 11)).toEqual(6)
    })

    it('nothing is found in an empty array', () => {
        expect(() => find([], 1)).toThrow(new Error('Value not in array'))
    })
})