"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Triangle = exports.Rectangle = void 0;
class Shape {
    constructor(name, side, area, perimeter) {
        this.name = name;
        this.side = side;
        this.area = area;
        this.perimeter = perimeter;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        const rectangleArea = width * height;
        const rectanglePerimeter = (2 * width) + (2 * height);
        super('rectangle', 4, rectangleArea, rectanglePerimeter);
        this.width = width;
        this.height = height;
    }
    getName() {
        return this.name;
    }
    getSide() {
        return this.side;
    }
    getArea() {
        return this.area;
    }
    getPerimeter() {
        return this.perimeter;
    }
}
exports.Rectangle = Rectangle;
class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
        const s = (sideA + sideB + sideC) / 2;
        const triangleArea = Math.sqrt(s * ((s - sideA) * (s - sideB) * (s - sideC)));
        const trianglePerimeter = sideA + sideB + sideC;
        super('triangle', 3, triangleArea, trianglePerimeter);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getName() {
        return this.name;
    }
    getSide() {
        return this.side;
    }
    getArea() {
        return this.area;
    }
    getPerimeter() {
        return this.perimeter;
    }
}
exports.Triangle = Triangle;
class Circle extends Shape {
    constructor(radius) {
        const circleArea = radius * radius * Math.PI;
        const circlePerimeter = (2 * radius) * Math.PI;
        super('circle', 0, circleArea, circlePerimeter);
        this.radius = radius;
    }
    getName() {
        return this.name;
    }
    getSide() {
        return this.side;
    }
    getArea() {
        return this.area;
    }
    getPerimeter() {
        return this.perimeter;
    }
}
exports.Circle = Circle;
