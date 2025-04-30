class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        return `${this.marca} ${this.modelo} ${this.ano}`;
    }
}

let c1 = new Carro("Chevrolet", "Onix", 2022);
let c2 = new Carro("Fiat", "Palio", 2020);
let c3 = new Carro("Volkswagen", "Gol", 2021);
