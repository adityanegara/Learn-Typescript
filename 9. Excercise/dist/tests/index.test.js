"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('Testing index file', () => {
    it('Should return Hello, World!', () => {
        expect((0, index_1.helloWorld)()).toBe('Hello, World!');
    });
});
