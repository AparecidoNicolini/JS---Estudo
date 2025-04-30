class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Estudante extends Pessoa2 {
    constructor(nome, idade, matricula, materia) {
        super(nome, idade)
        this.matricula = matricula;
        this.materia = materia;
    }

    infoEstudante() {
        return `O aluno ${this.nome} com idade ${this.idade} tem a matricula ${this.matricula} e está estudando ${this.materia}`
    }
}

let aluno = new Estudante ('Aparecido', 31, 1, 'Ciencias da computação');
