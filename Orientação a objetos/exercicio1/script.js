document.querySelector('.modelo').innerHTML = c1.exibirInfo();
document.querySelector('.marca').innerHTML = c2.exibirInfo();
document.querySelector('.ano').innerHTML = c3.exibirInfo();

// Exercicio 2

document.querySelector('.pessoa1').innerHTML = p1.infoPessoa();
document.querySelector('.pessoa2').innerHTML = p2.infoPessoa();

// console.log(p1.infoPessoa());

// Exercicio 3.

document.querySelector('.ex3').innerHTML = aluno.infoEstudante();
document.querySelector('.produto').innerHTML = `Referência: ${prod1.nome} | Quantidade disponível: ${prod1.quantidade}`;
let atEstoque = document.querySelector('.at');
atEstoque.addEventListener('click', () => {
    let estoque = document.querySelector('.qtn').value;
    prod1.atualizaEstoque(estoque);
})

