// Interface

// public
// protected
// private

export interface IDog {
    name?: string;
    weight: number;
    readonly color: string;
}

interface IDog2 extends IDog{
    readonly color: 'golden' | 'white';
}

interface ICat {
    name?: string;
    weight: number;
    readonly color: string;
}

class CDog implements IDog {
    public weight: number;
    readonly color: string;
    private height: number = 12;

    constructor(weight: number, color: string) {
        this.weight = weight;
        this.color = color;
    }

    getColor() {
        return this.color
    }

    getHeight() {
        return this.height
    }
}

const frenchBulldog: IDog = {
    weight: 12,
    color: 'fawn',
    name: 'Richard',
};

frenchBulldog.weight;
frenchBulldog.color


const corgi: IDog = {
    weight: 1,
    color: 'golden',
}


corgi.weight;
corgi.color;

function getWeight(dog: IDog): number {
    if (dog.color === 'golden') {
        return 123;
    }

    return dog.weight;
}

// frenchBulldog.color = 'white';
frenchBulldog.weight = 13;
frenchBulldog.name;

function getName(dog: IDog): string | undefined {
    return dog.name;
}

getName(corgi)?.toUpperCase();


// const newDog = new Dog(14, 'white');
//
// newDog.weight = 15;
// newDog.color;

interface Pet {
    name: string;
}

class Dog implements Pet {
    name = 'dog';

    bark() {

    }
}

class Cat implements Pet {
    name = 'cat';

    meow() {

    }
}

const dog = new Dog();
const cat = new Cat();

function getPetName(pet: Pet) {
    return pet.name;
}

getPetName(dog);
getPetName(cat);


type Position = 'absolute' | 'fixed' | 'relative';

const customPosition: Position = 'absolute';

type TDog = {
    name?: string;
    weight: number;
    readonly color: string;
}

let customDog: TDog;

type ExtraDog = IDog2 & IDog;

const extraDog: ExtraDog = {
    weight: 123,
    color: 'golden',
};

//================================

type T1 = {};

type T2 = {};

type T3 = {};

type T4 = {};

interface I1 {

}

interface I2 {

}

interface I3 extends T1, I2{

}

class C1 {
    p1: string;
    p2: string;
    p3: string;

    constructor(p1: string, p2: string, p3: string) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
}

class C2 extends C1 implements I1, I2 {
    p4: string;

    constructor(p1: string, p2: string, p3: string, p4: string) {
        super(p1, p2, p3);
        this.p4 = p4;
    }
}

class C3 extends C2 {

}


const c1 = new C1('1', '2', '3');
const c2 = new C2('1', '2', '3', '4');