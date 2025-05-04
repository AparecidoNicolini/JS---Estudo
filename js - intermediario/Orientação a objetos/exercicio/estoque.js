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
        if(qtn >= 0) {
            this.quantidade = Number(qtn);
        document.querySelector('.produto').innerHTML = `Referência: ${prod1.nome} | Quantidade disponível: ${prod1.quantidade}`;
        } else {
            document.querySelector('.retornoErroProd').innerHTML = `${prod1.nome} com estoque invalido. o ${qtn} está menor que o permitido.`
        }
    }

    aumentEstoque(qtn) {
        if(qtn > 0) {
            this.quantidade += Number(qtn);
            document.querySelector('.produto').innerHTML = `Referência: ${prod1.nome} | Quantidade disponível: ${prod1.quantidade}`;
        }
        else {
            document.querySelector('.retornoErroProd').innerHTML = `${prod1.nome} com estoque invalido. o ${qtn} está menor que o permitido.`
        }
    }

    diminuEstoque(qtn) {
        if(qtn > 0) {
            if(this.quantidade - qtn > 0) {
            this.quantidade -= Number(qtn);
            document.querySelector('.produto').innerHTML = `Referência: ${prod1.nome} | Quantidade disponível: ${prod1.quantidade}`;
            }
            else {
                document.querySelector('.retornoErroProd').innerHTML = `${prod1.nome} com estoque invalido. o ${qtn} está menor que o permitido.`
            }
        }
        else {
            document.querySelector('.retornoErroProd').innerHTML = `${prod1.nome} com estoque invalido. o ${qtn} está menor que o permitido.`
        }
    }
}

let prod1 = new Produto('Sim', 'Rocol GLC 346', 50)

