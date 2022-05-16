"use strict";
// Mapped types
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCase = void 0;
function toUpperCase(text) {
    if (typeof text === 'number') {
        return text.toString().toUpperCase();
    }
    return text.toUpperCase();
}
exports.toUpperCase = toUpperCase;
const answer = {
    '0': 123,
    'fg': 123,
    1: 123,
    anb: 123,
};
const fontWeightMap = {
    'bold': 500,
    // 'bolder': '600',
    'normal': '400',
    // 'lighter': 300,
};
// const font: FontSettings = { weight: 'bold' };
//
//
// console.log(fontWeightMap[font.weight]);
