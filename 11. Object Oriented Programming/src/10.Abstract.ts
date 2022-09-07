abstract class Shape {
    constructor(public color: string) { }

    abstract render(): void
}

class Rectangle extends Shape {
    constructor(
        public width: number,
        public height: number,
        color: string) {
        super(color)
    }
    render(): void {
        console.log('rendering rectangle')
    }
}

class Circle extends Shape {
    constructor(
        public radius: number,
        color: string) {
        super(color)
    }
    render(): void {
        console.log('rendering circle')
    }
}

export { }