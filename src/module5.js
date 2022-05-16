"use strict";
// TypeGuards
Object.defineProperty(exports, "__esModule", { value: true });
exports.padLeft = void 0;
// typeof
// string
// number
// bigint
// boolean
// symbol
// undefined
// object
// function
function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return new Array(padding + 1).join(' ') + input;
    }
    return padding + input;
}
exports.padLeft = padLeft;
padLeft('   ', 'str'); // '   str'
padLeft(3, 'str'); // '   str'
// проверку на истинность
function getUsersOnlineMessage1(numUsersOnline) {
    if (numUsersOnline) {
        return numUsersOnline?.toFixed();
    }
    return 0;
}
function getUsersOnlineMessage2(numUsersOnline) {
    return numUsersOnline?.toFixed() || 0;
}
// проверка на равенство
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
// instanceof
function log(value) {
    if (value instanceof Date) {
        console.log(value.toUTCString());
    }
    else {
        console.log(value.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined && typeof pet.swim === 'function';
}
function isBird(pet) {
    return pet.fly !== undefined && typeof pet.fly === 'function';
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    if (isBird(pet)) {
        pet.fly();
    }
}
// исключающие объединения
var PetKind;
(function (PetKind) {
    PetKind["Dog"] = "dog";
    PetKind["Cat"] = "cat,";
})(PetKind || (PetKind = {}));
function makeNoise(pet) {
    if (pet.kind === PetKind.Dog) {
        pet.bark();
    }
    if (pet.kind === PetKind.Cat) {
        pet.meow();
    }
}
var MovieTypes;
(function (MovieTypes) {
    MovieTypes["Film"] = "film";
    MovieTypes["TvSeries"] = "tvSeries";
    MovieTypes["TvShow"] = "tvShow";
})(MovieTypes || (MovieTypes = {}));
function watch(movie) {
    if (movie.type === 'Film') {
        console.log(movie.duration);
    }
    if (movie.type === 'TvSeries') {
        console.log(movie.season);
    }
}
const MovieTypesMap = {
    Film: 123,
    TvSeries: 456,
};
const testPick = { type: 'Film', duration: 123 };
