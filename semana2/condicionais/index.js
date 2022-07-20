// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//     console.log("Passou no teste.")
// } else {
//     console.log("Não passou no teste.")
// }

// // a) Explique o que o código faz. Qual teste ele realiza ?
// R = Ele verifica números pares, ou seja, ao dividir determinado número por 2, o resto é 0

// // b) Para que tipos de números ele imprime no console "Passou no teste"?
// R = Números pares 

// // c) Para que tipos de números a mensagem é "Não passou no teste"?
// R = Números ímpares

// 2. O código abaixo foi feito por uma pessoa desenvolvedora,
// contratada para automatizar algumas tarefas de um supermercado

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
        case "Maçã":
            preco = 2.25
            break;
            case"Uva":
            preco = 0.30
            break;
            case "Pêra":
                preco = 5.5
                break; //BREAK PARA O ITEM c.
               default:
                   preco = 5
                   break;
}
console.log("O preço da fruta", fruta, "é", "R$", preco)

// a) Para que serve o código acima?

// b)Qual será a mensagem impressa no console, se o valor de fruta for "Maça"

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem
// impressa no console se retirássemo o break que está logo acima do
//  default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
