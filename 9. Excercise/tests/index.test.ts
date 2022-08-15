import { helloWorld } from '../src/index'

describe('Testing index file', () => {
    it('Should return Hello, World!', () => {
        expect(helloWorld()).toBe('Hello, World!');
    })
})