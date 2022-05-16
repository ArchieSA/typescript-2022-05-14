"use strict";
// Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomClass = void 0;
function CustomBehavior(meta) {
    return function (constructor) {
        return class extends constructor {
            name;
            constructor() {
                // console.log('decorator');
                super();
                this.name = 'decoratorName';
            }
        };
    };
}
let CustomClass = class CustomClass {
    name = 'defaultName';
    constructor() {
        // console.log('constructor');
    }
};
CustomClass = __decorate([
    CustomBehavior({
        name: '13',
    })
], CustomClass);
exports.CustomClass = CustomClass;
const customObject = new CustomClass();
console.log(customObject.name);
function LogTime() {
    return (target, propertyName, descriptor) => {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            console.time(propertyName);
            const result = method.apply(this, args);
            console.timeEnd(propertyName);
            return result;
        };
    };
}
class PropertyDecoratorClass {
    property2 = '123';
    // @LogTime()
    property = '';
    customMethod() {
        console.log(this.property2);
        return Math.random() * Math.random() * Math.random() * Math.random() * Math.random() * Math.random();
    }
    constructor(property) {
        this.property = property;
    }
}
__decorate([
    LogTime()
], PropertyDecoratorClass.prototype, "customMethod", null);
const testProperty = new PropertyDecoratorClass('');
testProperty.customMethod();
