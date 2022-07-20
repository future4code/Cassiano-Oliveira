
//-----Exercícios de interpretação de Código

//1. Leia o código abaixo

// a) O que vai ser impresso no console?
// R = Será impresso no console
// o nome "Matheus Nachtergaele", 
// referente ao console.log(filme.elenco[0]);
// canal: "Globo", horário: "14h"

// 2. Leia o código abaixo
// const cachorro = {
//     nome: "Juca",
//     idade: 3,
//     raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a)O que será impresso no console?
// R = Serão impressos Objetos 
// nome: "Juca", idade: 3, raca: "SRD"
// nome: "Juba", idade: 3, raca: "SRD"
// nome: "Jubo", idade: 3, raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes
// do nome de um objeto?
// R = A sintaxe ... chama-se Espalhamento ou Spread,
// através dela, realiza-se uma cópia de um objeto (ou array) inteiro;
// após fazer a cópia, podemos manipula-la, mudando ou adicionando propriedades.


// function minhaFuncao(objeto, propriedade) {
//     return objeto[ propriedade]
// }

// const pessoa = {
//     nome:"Caio",
//     idade: 23,
//     backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) o que vai ser impresso no console?
// R = False e undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// R = False pois o objeto nome não é Backender;
// const pessoa, não é compatível com a propriedade Altura;


