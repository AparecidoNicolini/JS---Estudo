// Inicio de criação de objetos

class Person {
    // Todo objeto deve possuir, propriedade e metodos.
    profissao = ''
    steps = 0
    constructor(name, age) {
        // Todo construtor é uma função auto inicializavel.
        this.name = name;
        this.age = age;
    }

    takeASteps() {
        this.steps++;
    }

    setAge(newAge) {
        if(typeof newAge == 'number'){
            this.age = newAge;
        }        
    }
}

let p1 = new Person('Joao', 24);
p1.profissao = 'Dentista'
console.log(p1);

let p2 = new Person('Maria', 30);
console.log(p2);

let p3 = new Person('Pedro', 20);
console.log(p3);

p1.setAge(18);

p1.takeASteps();
p1.takeASteps();
p1.takeASteps();
console.log(`Passos de ${p1.name} é igual a ${p1.steps} e tem ${p1.age} anos`);



// Na orientação a objetos, dentro do objeto a declaração de variavel, não precisa ser definida com let const e etc... 