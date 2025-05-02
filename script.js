// Factory para se criar uma pessoa.

function createPerson(nome, sobrenome, idade) {
    return {
        nome, 
        sobrenome, 
        idade,
        getFullName: () => {
            return `${nome} ${sobrenome}`;
        },
        // ou se preferir
        getFullName2() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

let p1 = createPerson('Aparecido', 'Nicolini', 31);
console.log(p1)

console.log(p1.getFullName());
console.log(p1.getFullName2());