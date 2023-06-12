//tipagens
const nome: string = "nome";
const number: number = 10;
const bolean: boolean = true;

const numbers: number[] = [1, 2, 3]
console.log(numbers);

//tuple
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]

//object literals
const user: { name: string, age: number } = {
    name: "Zé",
    age: 22,
}
const user2: { name: boolean, age: number } = {
    name: true,
    age: 27,
}

const user3: {} = {
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
}
console.log("user :", user)
console.log("user3 :", user3)

//Tipo Any
let valor: any = 0;
valor = "teste";
valor = true;

// union Types, Unir dois tipos em uma variável
let id: string | number = "10j";
id = 10;

// type alias
type MyIdType = number | string;
let userId: MyIdType = 10;
const shirId: MyIdType = "01tt";

// enum
// Tamanhos de roupas 
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}
const camisa = {
    camisa1: {
        name: "Camisa gola V",
        size: Size.G, // Referenciando o Enum
    },
    camisa2: {
        name: "Camisola",
        size: Size.M,  // Referenciando o Enum
    }
}
console.log("Camisa :", camisa)

//literal types, deixa ser apenas tipos declarados
let userAutenticado: "autenticado" | null;
userAutenticado = null;
userAutenticado = "autenticado"

//funções
//Funções no TypeScript pedem para colocar o tipo da variável que a função vai receber
function sum(a: number, b: number) {
    return a + b;
}
console.log("soma 20,30 :", sum(20, 30));

//função que recebe o tipo string e declara o valor do retorno como tipo string
function hello(name: string): string {
    return `Hello ${name}`
}

console.log("function Hello :", hello("Maria e João"));

//Função que não retorna nada
function log(msg: string): void {
    console.log("função void :", msg)
}
log("teste");

//funções com Variáveis opicionais
function greeting(name: string, greet?: string) {
    console.log(`Greeting : Olá ${greet ? greet : ""} ${name}`);
}

greeting("José")
greeting("José", "Predro")

//interfaces
//interfaces é uma forma de padronizar estruturas
interface MathFunctionsParams {
    n1: number;
    n2: number;
}
function sumNumbers(nums: MathFunctionsParams) {
    return nums.n1 + nums.n2
}

console.log("sumNumbers :", sumNumbers({ n1: 1, n2: 2 }));

function multNumbers(nums: MathFunctionsParams) {
    return nums.n1 * nums.n2
}
// constante com tipos da interface MathFunctionsParams
const multiplyNumbers: MathFunctionsParams = {
    n1: 5,
    n2: 5
}

console.log("multNumbers :", multNumbers(multiplyNumbers));

//generics
//Os "generics" permitem criar componentes reutilizáveis que podem trabalhar com diferentes tipos de dados.
//O exemplo abaixo cria uma função que pode receber todos tipos de arrays, como numbers,strings ou boolean
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item : ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b"];
showArrayItems(a1);
showArrayItems(a2);

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log("O nome do usuario é :", this.name);
    }

    showUserRole(canShow: boolean) {
        console.log(`${canShow ? `Role do usuário é ${this.role}` : "informação restrita"} `)
    }
}

const jose = new User("José", "Admin", true);
console.log("Classe User : ", jose)
jose.showUserName()
jose.showUserRole(true)

//interfaces em classes
//Cria a interface de carro com os valores
interface Ivehicle {
    brand: string
    showBrand(): void
}

class Car implements Ivehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é : ${this.brand}`)
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand()

//herança de classes
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels); //Pega as váriaveis da classe pai
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(SuperCar)

//Decorator
// Os decorators podem ser usados para uma variedade de tarefas, como:
// - Adicionar comportamento adicional a uma classe, como mixins, logging ou validação de entrada.
// - Modificar o comportamento de um método, como aplicar autorização ou medição de desempenho.
// - Adicionar metadados a uma classe, método ou propriedade que podem ser lidos em tempo de execução para fins de reflexão ou análise.

//constructor decorator
function BaseParamters(){
    //Pegando todos argumentos de um objeto para inserir novos
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random()
            createdAt = new Date();
        }
    }
}
//Implementando decorator
@BaseParamters()

class Person{
    name

    constructor(name:string){
        this.name = name
    }
}

const sam = new Person("Sam");
console.log(sam)

