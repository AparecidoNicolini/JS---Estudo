// Factory


class Person {
    age = 0;
    static hands = 2;
    constructor(name) {
        this.name = name;
    }
}   

function createPerson (name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson('Aparecido', 31);
console.log(p1);

// ---------------------------------------------------------------------------------------
// // Metodo Estatico.

// class Person {
//     static hands = 2;
//     age = 0;

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(`Olá, meu nome é ${this.name} e eu
//             tenho ${this.hands} mãos`);
//             // O static ele faz referencia diretamente a classe, não ao valor do objeto.
//             // para acessar a variavel hands, deve ser declarado. Person.hands.
//         console.log(`Olá, meu nome é ${this.name} e eu
//                 tenho ${Person.hands} mãos`);

//         // O metodo estatico, pode ser utilizado tbm em função.
//         // static sayHY() {}
//         // this.dados não funciona no metodo estatico.
//     }
// }

// let p1 = new Person('Aparecido');

// p1.sayHi();