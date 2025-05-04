class Cliente {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone
    }

    cadCliente() {
        document.querySelector('.resultado').innerHTML += `
            Nome: ${this.nome}<br>
            Email: ${this.email}<br>
            Telefone: ${this.telefone} <br>
        `;
    }    
}
