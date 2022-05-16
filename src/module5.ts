// TypeGuards

// typeof

// string
// number
// bigint
// boolean
// symbol
// undefined
// object
// function

export function padLeft(padding: number | string, input: string): string {
    if (typeof padding === 'number') {
        return new Array(padding + 1).join(' ') + input
    }

    return padding + input;
}


padLeft('   ', 'str'); // '   str'
padLeft(3, 'str'); // '   str'


// проверку на истинность

export function getUsersOnlineMessage1(numUsersOnline?: number) {
    if (numUsersOnline) {
        return numUsersOnline?.toFixed();
    }

    return 0;
}

export function getUsersOnlineMessage2(numUsersOnline?: number) {
    return numUsersOnline?.toFixed() || 0;
}

// проверка на равенство

export function example(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

// instanceof

export function log(value: Date | string) {
    if (value instanceof Date) {
        console.log(value.toUTCString());
    } else {
        console.log(value.toLowerCase());
    }
}

// type predicates
export interface Fish {
    swim: () => void;
}

export interface Bird {
    fly: () => void;
}

export function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined && typeof (pet as Fish).swim === 'function';
}

function isBird(pet: Fish | Bird): pet is Bird {
    return (pet as Bird).fly !== undefined && typeof (pet as Bird).fly === 'function';
}



function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim();
    }

    if (isBird(pet)) {
        pet.fly();
    }
}

// исключающие объединения

const enum PetKind {
    Dog = 'dog',
    Cat = 'cat,'
}

interface Dog {
    kind: PetKind.Dog;
    bark: () => void;
}

interface Cat {
    kind: PetKind.Cat;
    meow: () => void;
}

function makeNoise(pet: Dog | Cat) {
    if (pet.kind === PetKind.Dog) {
        pet.bark();
    }

    if (pet.kind === PetKind.Cat) {
        pet.meow();
    }
}

enum MovieTypes {
    Film = 'film',
    TvSeries = 'tvSeries',
    TvShow = 'tvShow'
}

interface Film {
    readonly type: 'Film';
    duration?: number;
    actors: string[];
    directors: string[];
}

interface TvSeries {
    type: 'TvSeries';
    season: number;
}

function watch(movie: Film | TvSeries) {
    if (movie.type === 'Film') {
        console.log(movie.duration);
    }
    if (movie.type === 'TvSeries') {
        console.log(movie.season);
    }
}

type MovieType = 'Film' | 'TvSeries';

type TestPartial = Partial<TvSeries>;
type TestRequired = Required<TestPartial>;
const MovieTypesMap: Record<MovieType, number> = {
    Film: 123,
    TvSeries: 456,
}

type TestPick = Readonly<Pick<Film, 'type'>> & Required<Pick<Film, 'duration'>>;

const testPick: TestPick = { type: 'Film', duration: 123}


type testOmit = Omit<Film, 'duration'>;



enum EModes {
    needCountColors,
    needMagic,
}

const getColorProfiles = (profiles = [], mode?: EModes) => {
    if (mode === EModes.needCountColors) {}  // mode can be compared with strings
    if (mode === EModes.needMagic) {}  // mode can be compared with strings
}


getColorProfiles([],  EModes.needMagic);
getColorProfiles([],  EModes.needCountColors);