class Estoque {
    constructor (disponivel) {
        this.disponivel = disponivel;
    }
}

class Produto extends Estoque {
    constructor(disponivel, nome, quantidade) {
        super(disponivel);
        this.nome = nome;
        this.quantidade = quantidade;
    }

    produInfo() {
        return `${this.nome} ${this.disponivel} ${this.quantidade}`
    }

    atualizaEstoque(qtn) {
        this.quantidade = qtn;
        document.querySelector('.produto').innerHTML = `Referência: ${prod1.nome} | Quantidade disponível: ${prod1.quantidade}`;
    }
}

let prod1 = new Produto('Sim', 'Rocol GLC 346', 50)

