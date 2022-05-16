// Mapped types

export function toUpperCase(text: string | number): string {
    if (typeof text === 'number') {
        return text.toString().toUpperCase();
    }

    return text.toUpperCase();
}


interface Dog {
    bark: () => void;
}

interface Cat {
    meow: () => void;
}

type CatOrDog = Dog | Cat;

type T1 = {};
type T2 = {};
type T3 = {};
type T4 = {};


type CustomType = (T1 | T2) & T3;


interface Answer {
    [name: string]: number;
}

const answer: Answer = {
    '0': 123,
    'fg': 123,
    1: 123,
    anb: 123,
}

type FontWeightMap = {
    'bold': number,
    'bolder': string,
    'normal': string,
    'lighter': number,
}
//
// interface FontSettings {
//     weight: FontWeight;
// }

type BoldFontWeight = FontWeightMap['bold'];

type BoldType = FontWeightMap['bold'];
type FontWeights = keyof FontWeightMap// 'bold' | 'bolder' .... ;

const fontWeightMap: {
    [fw in keyof FontWeightMap]?: FontWeightMap[fw];
} = {
    'bold': 500,
    // 'bolder': '600',
    'normal': '400',
    // 'lighter': 300,
};



// const font: FontSettings = { weight: 'bold' };
//
//
// console.log(fontWeightMap[font.weight]);
