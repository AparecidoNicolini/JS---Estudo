class Pessoa {
    constructor (nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }

    infoPessoa() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
    }
}

let p1 = new Pessoa ('Aparecido', 31, "São Paulo");
let p2 = new Pessoa ('Barney', 20, 'Cotia');