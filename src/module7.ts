// Conditional types

export interface IdLabel {
    id: number;
}

interface NameLabel {
    name: string;
}

interface BooleanLabel {
    name: boolean;
}

interface NullLabel {
    name: null;
}

type IdOrNull<T extends number | null> = T extends number ? IdLabel : NullLabel;

type NameOrIdOrBooleanOrNull<T extends string | number | boolean | null> =
    T extends number | null ? IdOrNull<T> :
        T extends string ? NameLabel : BooleanLabel;


function createLabel<T extends string | number | boolean | null>(idOrName: T): NameOrIdOrBooleanOrNull<T> {
    throw 'unimplemented';
}

let a = createLabel('ts');

let b = createLabel(45);

let c = createLabel(true);

let d = createLabel(null);

// Infer

let variable = '123';

function getRandomInteger(max: number) {
    return Math.floor(Math.random() * max);
}

function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const dog = {
    name: 'Richard',
}

const dogName = getProperty(dog, 'name');


function describePerson(person: {name: string, age: number, height: number}) {
    return `${person.name} ${person.age} ${person.height}`
}

function call<ArgumentsType extends any[], ReturnType>(
    functionCall: (...args: ArgumentsType) => ReturnType,
    ...args: ArgumentsType): ReturnType {
    return functionCall(...args);
}

const personInfo = call(describePerson, {name: '', age: 100, height: 100});

type ConvertFunctionType = (text: string) => number;

type FunctionReturnType<FunctionType extends (args: any) => any> = FunctionType extends (...args: any) => infer ReturnType ? ReturnType : any;
type FunctionArgType<FunctionType extends (args: any) => any> = FunctionType extends (...args: infer ArgTypes) => any ? ArgTypes : any;

type ConvertFunctionReturnType = FunctionReturnType<ConvertFunctionType>;
type ConvertFunctionArgType = FunctionArgType<ConvertFunctionType>;


