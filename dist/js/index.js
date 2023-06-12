"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const nome = "nome";
const number = 10;
const bolean = true;
const numbers = [1, 2, 3];
console.log(numbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Zé",
    age: 22,
};
const user2 = {
    name: true,
    age: 27,
};
const user3 = {
    joão: {
        name: "joao",
        age: "teste",
        posicao: "2"
    },
    pedro: {
        name: "pedro",
        age: "teste",
        posicao: "2"
    },
};
console.log("user :", user);
console.log("user3 :", user3);
let valor = 0;
valor = "teste";
valor = true;
let id = "10j";
id = 10;
let userId = 10;
const shirId = "01tt";
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    camisa1: {
        name: "Camisa gola V",
        size: Size.G,
    },
    camisa2: {
        name: "Camisola",
        size: Size.M,
    }
};
console.log("Camisa :", camisa);
let userAutenticado;
userAutenticado = null;
userAutenticado = "autenticado";
function sum(a, b) {
    return a + b;
}
console.log("soma 20,30 :", sum(20, 30));
function hello(name) {
    return `Hello ${name}`;
}
console.log("function Hello :", hello("Maria e João"));
function log(msg) {
    console.log("função void :", msg);
}
log("teste");
function greeting(name, greet) {
    console.log(`Greeting : Olá ${greet ? greet : ""} ${name}`);
}
greeting("José");
greeting("José", "Predro");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log("sumNumbers :", sumNumbers({ n1: 1, n2: 2 }));
function multNumbers(nums) {
    return nums.n1 * nums.n2;
}
const multiplyNumbers = {
    n1: 5,
    n2: 5
};
console.log("multNumbers :", multNumbers(multiplyNumbers));
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`Item : ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b"];
showArrayItems(a1);
showArrayItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log("O nome do usuario é :", this.name);
    }
    showUserRole(canShow) {
        console.log(`${canShow ? `Role do usuário é ${this.role}` : "informação restrita"} `);
    }
}
const jose = new User("José", "Admin", true);
console.log("Classe User : ", jose);
jose.showUserName();
jose.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é : ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(SuperCar);
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
