"use strict";
// Conditional types
Object.defineProperty(exports, "__esModule", { value: true });
function createLabel(idOrName) {
    throw 'unimplemented';
}
let a = createLabel('ts');
let b = createLabel(45);
let c = createLabel(true);
let d = createLabel(null);
// Infer
let variable = '123';
function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
function getProperty(obj, key) {
    return obj[key];
}
const dog = {
    name: 'Richard',
};
const dogName = getProperty(dog, 'name');
function describePerson(person) {
    return `${person.name} ${person.age} ${person.height}`;
}
function call(functionCall, ...args) {
    return functionCall(...args);
}
const personInfo = call(describePerson, { name: '', age: 100, height: 100 });
