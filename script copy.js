// Inicio de criação de objetos

// quando formos utilizar getter e setter, utilizamos _ antes do nome da variavel

// exemplo:

class Person {
    _age = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age() {
        return this._age;
    }

    // Get serve para pegar os dados, o Set serve para fornecer os dados.

    set age (x) {
        this._age = x;
    }
}

let p1 = new Person('Aparecido', 'Nicolini');

p1.age = 20;
console.log(p1.fullName);

console.log(p1.age);