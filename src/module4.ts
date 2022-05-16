// Generics

export interface Plant {
    grow: () => void;
}

interface Apple {
    p1: string;
    grow: () => void;
}

interface Tomato extends Plant {
    p2: string;
}

interface Pumpkin extends Plant {
    p3: string;
}

const apple: Apple = {p1: "", grow: () => {}};
const tomato: Tomato = {p2: "", grow: () => {}};
const pumpkin: Pumpkin = {p3: "", grow: () => {}};

function grow<T extends Plant>(plant: T): T {
    plant.grow();

    return plant;
}

grow<Apple>(apple);
const tomatoResult: Tomato =  grow<Tomato>(tomato);
grow<Pumpkin>(pumpkin);


interface Point2D {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
    z: number;
}

function draw<T>(point: T): T {
    // logic
    const test: T = point;

    return test;
}
let str = "";

const point: Point2D = {x: 1, y: 2};

const result = draw(point);

const point3D: Point3D = {x: 1, y: 2, z: 3};
draw<Point3D>(point3D);

draw<Point3D>({x: 1, y: 2, z: 3});

interface CustomResponse<BodyType> {
    body: BodyType;
}

const body: CustomResponse<{ content: string }> = { body: { content: '' } };


function get<T extends object>(): CustomResponse<T> {
    return { body: { content: '' } } as CustomResponse<T>;
}

// function post<T>(): CustomResponse<T> {
//     return { body: { content: '' } };
// }

function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
};

const point3D2: Point3D = {x: 1, y: 1, z: 2};

const xValue = getProperty(point3D2, 'x');

class CustomClass<T> {
    property: T;

    getProperty(property: T): T {
        return this.property || property;
    }

    constructor(property: T) {
        this.property = property;
    }
}

new CustomClass<string>('propertyValue');

