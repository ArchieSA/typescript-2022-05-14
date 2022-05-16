"use strict";
// Interface
Object.defineProperty(exports, "__esModule", { value: true });
class CDog {
    weight;
    color;
    height = 12;
    constructor(weight, color) {
        this.weight = weight;
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    getHeight() {
        return this.height;
    }
}
const frenchBulldog = {
    weight: 12,
    color: 'fawn',
    name: 'Richard',
};
frenchBulldog.weight;
frenchBulldog.color;
const corgi = {
    weight: 1,
    color: 'golden',
};
corgi.weight;
corgi.color;
function getWeight(dog) {
    if (dog.color === 'golden') {
        return 123;
    }
    return dog.weight;
}
// frenchBulldog.color = 'white';
frenchBulldog.weight = 13;
frenchBulldog.name;
function getName(dog) {
    return dog.name;
}
getName(corgi)?.toUpperCase();
class Dog {
    name = 'dog';
    bark() {
    }
}
class Cat {
    name = 'cat';
    meow() {
    }
}
const dog = new Dog();
const cat = new Cat();
function getPetName(pet) {
    return pet.name;
}
getPetName(dog);
getPetName(cat);
const customPosition = 'absolute';
let customDog;
const extraDog = {
    weight: 123,
    color: 'golden',
};
class C1 {
    p1;
    p2;
    p3;
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
}
class C2 extends C1 {
    p4;
    constructor(p1, p2, p3, p4) {
        super(p1, p2, p3);
        this.p4 = p4;
    }
}
class C3 extends C2 {
}
const c1 = new C1('1', '2', '3');
const c2 = new C2('1', '2', '3', '4');
