interface Point {
    x: number,
    y: number,
}

const logPoint = (p: Point) =>{
    console.log(`${p.x} ${p.y}`)
}

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
 
const color = { hex: "#187ABF" };
// logPoint(color); //error

const point = {x: 12, y: 26};
logPoint(point);