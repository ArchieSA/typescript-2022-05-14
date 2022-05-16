// Types
// Boolean
let isTrue: boolean = true;

// Number

let num: number = 10;
let float: number = 10.5;
let binary: number = 0b101;

// BigInt

// let bigNumber: bigint = 100n;

// String

let str: string = 'string';

// Null
let nullVar: null = null;

// Undefined
let undefinedVar: undefined = undefined;

// Object


let emptyObjectVar: object = {};

export let objectVar: { name: string, age: { years: number } } = {
    name: 'Artem',
    age: {
        years: 100,
    }
};

// Array

let students: number[] = [123, 456];

// Tuple

const tuple: [number, string] = [123, '456'];

// Any

let testAny: any;
testAny = {};
testAny = 123;
testAny = '123';

isTrue = testAny;

testAny.toUpperCase();

// Unknown

let unknownVar: unknown = {test: 123};
let unknownVar2: unknown = 23;

unknownVar = '123';

// isTrue = unknownVar;
unknownVar = unknownVar2;

// unknownVar.test;

// Function

function testFunction(arg1: string, arg2: number): string {
    return arg1 + arg2;
}

// Void

function testVoidFunction(arg1: string, arg2: number): void {
    console.log(arg2 + arg1);
}

// LiteralTypes

let fontWeight: 500 | 600 | 700 | '500' | {name: string, age: {years: 34}} = {name: '123', age: {years: 34}};
fontWeight = 600;

let position: 'absolute' | 'fixed' = 'fixed';



// Enum

enum SimpleEnum {
    A = '123',
    B = '345',
    C = '6789',
}

let a: SimpleEnum = SimpleEnum.A;
let b = SimpleEnum.B;



