//Substitua o @ pela condicional correta para ser TRUE

let x = 10;
let y = 5;
console.log(x > y);

// Substitua o @ para FALSE

let w = "10";
let z = 10;
console.log(w === z);

// Substitua para TRUE

let a = 10;
let b = 5;
console.log(a > b);

// crie uma condicional para verificar 
// se o preço é baixo ou caro
// até 45, está barato

let preco = 100;

if (preco <= 45) {
    console.log("O produto está barato!");
} else if (preco > 45 && preco < 70) {
    console.log ("O produto está com o preço mediano!");
} else {
    console.log("O produto está com o preço extremamente caro!");
}

// preco <= 45 ? console.log("O produto está barato!") : preco > 45 && preco < 70 ? console.log("O produto está com o preço mediano!") : console.log("O produto está extremamente caro!");

// switch case

let funcao = "tecnico";

switch (funcao) {
    case "gerente":
        console.log("Camiseta Branca");
        break;
    case "fiscal":
        console.log("Camiseta Azul");
        break;
    case "estoquista":
        console.log("Camiseta Verde");
        break;
    default:
        console.log("Camiseta Preta");
        break;
}