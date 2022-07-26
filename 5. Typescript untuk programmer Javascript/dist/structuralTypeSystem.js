"use strict";
const logPoint = (p) => {
    console.log(`${p.x} ${p.y}`);
};
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);
const color = { hex: "#187ABF" };
const point = { x: 12, y: 26 };
logPoint(point);
