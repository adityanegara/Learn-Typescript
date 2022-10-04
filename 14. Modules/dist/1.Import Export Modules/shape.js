"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Triangle = exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
exports.Circle = Circle;
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
}
exports.Triangle = Triangle;
class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
exports.Square = Square;
