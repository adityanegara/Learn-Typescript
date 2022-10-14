abstract class Shape
{
    constructor
        (
            public name: string,
            public side: number,
            public area: number,
            public perimeter: number
        ){}
    
    abstract getName():string;
    abstract getSide():number;
    abstract getArea():number;
    abstract getPerimeter():number;
}

class Rectangle extends Shape
{
    constructor
    (
        public width:number,
        public height: number,
    ){
        const rectangleArea = width * height;
        const rectanglePerimeter = (2 * width) + (2 * height);
        super('rectangle', 4, rectangleArea, rectanglePerimeter);
    }

    getName(): string {
        return this.name;
    }
    getSide(): number {
        return this.side;
    }
    getArea(): number {
        return this.area;
    }
    getPerimeter(): number {
        return this.perimeter;
    }
}

class Triangle extends Shape
{
    constructor
    (
        public sideA:number,
        public sideB: number,
        public sideC: number
    ){
        const s = (sideA + sideB + sideC) / 2;
        const triangleArea = Math.sqrt(s * ((s - sideA) * (s - sideB) * (s - sideC)));
        const trianglePerimeter = sideA + sideB + sideC;
        super('triangle', 3, triangleArea, trianglePerimeter);
    }

    getName(): string {
        return this.name;
    }
    getSide(): number {
        return this.side;
    }
    getArea(): number {
        return this.area;
    }
    getPerimeter(): number {
        return this.perimeter;
    }
}

class Circle extends Shape
{
    constructor
    (
        public radius:number,
    ){
        const circleArea = radius * radius * Math.PI;
        const circlePerimeter = (2 * radius) * Math.PI;
        super('circle', 0, circleArea, circlePerimeter);
    }

    getName(): string {
        return this.name;
    }
    getSide(): number {
        return this.side;
    }
    getArea(): number {
        return this.area;
    }
    getPerimeter(): number {
        return this.perimeter;
    }
}

export { Rectangle, Triangle, Circle };