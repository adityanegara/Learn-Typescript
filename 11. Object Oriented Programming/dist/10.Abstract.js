"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }
    render() {
        console.log('rendering rectangle');
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('rendering circle');
    }
}
