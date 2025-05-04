let btn = document.querySelector('.btn1');
let contador = 0;
btn.addEventListener('click', () => {
    nome = document.querySelector('.nome').value;
    email = document.querySelector('.email').value;
    telefone = document.querySelector('.telefone').value;
    cliente = new Cliente(nome, email, telefone);
    cliente.cadCliente();
})

document.querySelector('.produto').innerHTML = `Referência: ${prod1.nome} | Quantidade disponível: ${prod1.quantidade}`;
let atEstoque = document.querySelector('.at');
let aument = document.querySelector('.aument');
let diminu = document.querySelector('.diminu');

atEstoque.addEventListener('click', () => {
    let estoque = document.querySelector('.qtn').value;
    prod1.atualizaEstoque(estoque);
})

aument.addEventListener('click', () => {
    let estoque = document.querySelector('.qtn').value;
    prod1.aumentEstoque(estoque);
})

diminu.addEventListener('click', () => {
    let estoque = document.querySelector('.qtn').value;
    prod1.diminuEstoque(estoque);
})

let prod = document.querySelector('.prod');
let qt = document.querySelector('.qt');
let price = document.querySelector('.price');
let addCart = document.querySelector('.addCart');
let cart = document.querySelector('.cart');

addCart.addEventListener('click', () => {
    alert('clicou');
})