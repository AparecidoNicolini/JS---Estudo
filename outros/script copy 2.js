// Herança

class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi () {
        console.log(`${this.name} diz: Olá`)
    }
}

class Student extends Person {
    // id = numero da matricula
    constructor(name, id) {
        // Quando falamos de Herança, podemos usar a função 'super', que pega os dados da classe pai
        // ou seja, da classe que HERDAMOS algo.
        super(name);
        this.id = id;
    }

    sayHi() {
        // Para executar função que está dentro do elemento pai, usamos o super
        super.sayHi();
        console.log(`${this.name} diz: Como voce está?`);
    }
}

let p1 = new Student("Aparecido", 35523);
p1.age = 20;
console.log(`Aluno: ${p1.name} - ID: ${p1.id} - Idade: ${p1.age} anos`);
p1.sayHi();