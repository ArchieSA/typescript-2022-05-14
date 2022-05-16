"use strict";
// Mixins
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    feed() {
        console.log('Feed animal');
    }
}
exports.Animal = Animal;
// 1
// export class Movable {
//     speed: number = 0;
//
//     move(): void {
//         console.log('Wrooom');
//     }
// }
//
// class Horse {
//
// }
//
// interface Horse extends Animal, Movable {}
//
//
// function applyMixins(derivedCtor: Constructor, baseCtors: Constructor[] = []) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//         })
//     });
// }
//
//
// applyMixins(Horse, [Movable, Animal])
//
// let pony: Horse = new Horse();
//
// pony.feed();
// pony.move();
// 2
class Horse extends Animal {
}
function Movable(Base) {
    return class extends Base {
        speed = 0;
        move() {
            console.log('Wrooom');
        }
    };
}
const pony = new Horse();
pony.feed();
const MovableHorse = Movable(Horse);
const movablePony = new MovableHorse();
movablePony.feed();
movablePony.move();
movablePony.speed;
