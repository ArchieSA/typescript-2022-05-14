// Decorators

function CustomBehavior(meta: {name: string}) {
    return function (constructor: new () => {}) {
        return class extends constructor {
            name: string;
            constructor() {
                // console.log('decorator');
                super();
                this.name = 'decoratorName';
            }
        }
    }
}

// @CustomBehavior({
//     name: '13',
// })
export class CustomClass {
    name: string = 'defaultName';
    constructor() {
        // console.log('constructor');
    }
}


const customObject = new CustomClass();
console.log(customObject.name);

function LogTime() {
    return (target: Object, propertyName: string, descriptor: PropertyDescriptor) => {
        const method = descriptor.value;
        descriptor.value = function(...args: ReturnType<typeof descriptor.value>) {
            console.time(propertyName);
            const result = method.apply(this, args);
            console.timeEnd(propertyName);

            return result;
        }
    }
}


class PropertyDecoratorClass {
    property2: string = '123';
    // @LogTime()
    property: string = '';

    // @LogTime()
    customMethod() {
        console.log(this.property2);
        return Math.random()*Math.random()*Math.random()*Math.random()*Math.random()*Math.random();
    }

    constructor(property: string) {
        this.property = property;
    }
}


const testProperty = new PropertyDecoratorClass('');
testProperty.customMethod();

