"use strict";
// Generics
Object.defineProperty(exports, "__esModule", { value: true });
const apple = { p1: "", grow: () => { } };
const tomato = { p2: "", grow: () => { } };
const pumpkin = { p3: "", grow: () => { } };
function grow(plant) {
    plant.grow();
    return plant;
}
grow(apple);
const tomatoResult = grow(tomato);
grow(pumpkin);
function draw(point) {
    // logic
    const test = point;
    return test;
}
let str = "";
const point = { x: 1, y: 2 };
const result = draw(point);
const point3D = { x: 1, y: 2, z: 3 };
draw(point3D);
draw({ x: 1, y: 2, z: 3 });
const body = { body: { content: '' } };
function get() {
    return { body: { content: '' } };
}
// function post<T>(): CustomResponse<T> {
//     return { body: { content: '' } };
// }
function getProperty(obj, key) {
    return obj[key];
}
;
const point3D2 = { x: 1, y: 1, z: 2 };
const xValue = getProperty(point3D2, 'x');
class CustomClass {
    property;
    getProperty(property) {
        return this.property || property;
    }
    constructor(property) {
        this.property = property;
    }
}
new CustomClass('propertyValue');
