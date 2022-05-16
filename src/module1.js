"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectVar = void 0;
// Types
// Boolean
let isTrue = true;
// Number
let num = 10;
let float = 10.5;
let binary = 0b101;
// BigInt
// let bigNumber: bigint = 100n;
// String
let str = 'string';
// Null
let nullVar = null;
// Undefined
let undefinedVar = undefined;
// Object
let emptyObjectVar = {};
exports.objectVar = {
    name: 'Artem',
    age: {
        years: 100,
    }
};
// Array
let students = [123, 456];
// Tuple
const tuple = [123, '456'];
// Any
let testAny;
testAny = {};
testAny = 123;
testAny = '123';
isTrue = testAny;
testAny.toUpperCase();
// Unknown
let unknownVar = { test: 123 };
let unknownVar2 = 23;
unknownVar = '123';
// isTrue = unknownVar;
unknownVar = unknownVar2;
// unknownVar.test;
// Function
function testFunction(arg1, arg2) {
    return arg1 + arg2;
}
// Void
function testVoidFunction(arg1, arg2) {
    console.log(arg2 + arg1);
}
// LiteralTypes
let fontWeight = { name: '123', age: { years: 34 } };
fontWeight = 600;
let position = 'fixed';
// Enum
var SimpleEnum;
(function (SimpleEnum) {
    SimpleEnum["A"] = "123";
    SimpleEnum["B"] = "345";
    SimpleEnum["C"] = "6789";
})(SimpleEnum || (SimpleEnum = {}));
let a = SimpleEnum.A;
let b = SimpleEnum.B;
