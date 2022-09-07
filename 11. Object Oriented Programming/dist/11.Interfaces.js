"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Professor {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    talking() {
        console.log('Hello im a professor');
    }
    waking() {
        console.log('walking');
    }
    teaching() {
        console.log('Im teaching');
    }
}
