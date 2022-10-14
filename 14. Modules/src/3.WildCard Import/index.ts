import * as shape from './Shape';

const rectangle = new shape.Rectangle(10,2);
const triangle = new shape.Triangle(4,5,10);
const circle = new shape.Circle(7);
console.log(rectangle.getName());
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(triangle.getName());
console.log(triangle.getArea());
console.log(triangle.getPerimeter());
console.log(circle.getName());
console.log(circle.getSide());
console.log(circle.getPerimeter());
