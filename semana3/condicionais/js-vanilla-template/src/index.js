// Exercicios de interpretação de código

// Exercicio 1
// O codigo faz um teste condicional, em que, se a sobra da divisao do numero digitado for igual a 0 (par), passou no teste, se nao (impar), não passou no teste.

// Exercicio 2
// a- É um codigo que vai dar um preço de acordo com a fruta escolhida
// b- O preço da fruta maça é R$2.25
// c- Vai trazer o valor default que é R$5

// Exercicio 3
// a- A primeira linha vai transformar a informação que o usuario colocou em numero
// b- Para o número 10 a mensagem será: (Esse número passou no teste), para -10 nenhuma mensagem aparecerá
// c- Haverá erro no console visto que o console.log(mensagem) está fora do bloco onde a sua variavel foi declarada

// Exercicios de Escrita de código

//Exercicio 4
// const idade = Number(prompt("Quantos anos você tem?"))
// if (idade >= 18) {
//     console.log("Você pode dirigir")
// } else{
//     console.log("Você não pode dirigir")

//Exercicio 5
// let periodo = prompt("Em qual turno do dia você estuda? Use m: matutino, v: vespertino n:noturno")
// if (periodo === "m") {
//     console.log("Bom dia")
// }else if (periodo === "v"){
//     console.log("Boa tarde")
// }else if (periodo === "n"){
//     console.log("Boa noite")
// }

// Exercicio 6
// let periodo = prompt("Em qual turno do dia você estuda? Use m: matutino, v: vespertino n:noturno")
// switch (periodo){
//     case "m":
//         console.log("Bom dia")
//         break
//     case "v":
//         console.log("Boa tarde")
//         break
//     case "n":
//         console.log("Boa noite")
// }

// // Exercicio 7
// const generoFilme = prompt("Qual o gênero do filme que você vai assitir?")
// const valor = Number(prompt("Qual o valor do ingresso?"))
// if (generoFilme ==="fantasia" && valor <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// Desafios
// Desafio 1-

// const generoFilme = prompt("Qual o gênero do filme que você vai assitir?")
// const valor = Number(prompt("Qual o valor do ingresso?"))
// const snack = prompt("Qual snack vai comprar?")

// // if (generoFilme ==="fantasia" && valor <= 15) {
// //     console.log("Bom filme!" +"...com " + snack)
// // } else {
// //     console.log("Escolha outro filme :(")
// // }
// // Desafio 2-
// let nome = prompt("Qual é seu nome")
// let tipoDeJogo = prompt("O jogo é do tipo domestico ou internacional?")
// let etapa = prompt("Qual é a etapa do jogo?")
// let categoria = Number(prompt("Qual é a categoria do jogo?"))
// let ingressos = Number (prompt("Quantos ingressos deseja comprar?"))
// const valorDoSf1 = ("1320")
// const valorDoSf2 = ("880")
// const valorDoSf3 = ("550")
// const valorDoSf4 = ("220")
// const valorDoDt1 = ("660")
// const valorDoDt2 = ("440")
// const valorDoDt3 = ("330")
// const valorDoDt4 = ("170")
// const valorDoFi1 = ("1980")
// const valorDoFi2 = ("1320")
// const valorDoFi3 = ("880")
// const valorDoFi4 = ("330")
// console.log("---Dados de compra---")
// console.log("Nome do cliente " + nome)
// if (tipoDeJogo === "do"){
//     console.log("Tipo de jogo: Nacional")
// } else if(tipoDeJogo === "in"){
//     console.log("Tipo de jogo: Internacional ")
// }
// if (etapa === "sf"){
//         console.log("Etapa do jogo: Semifinais")}
//     else if(etapa === "dt"){
//         console.log("Etapa do jogo: Decisão de terceiro lugar")}
//     else if(etapa ==="fi"){
//         console.log("Etapa do jogo: Finais")}
// if (categoria === "1"){
//         console.log("Categoria 1")
// }
//     else if (categoria === "2"){
//         console.log("Categoria 2")
// }
//     else if (categoria === "3"){
//         console.log("Categoria 3")
// }
//     else if (categoria === "4"){
//         console.log("Categoria 4")
// }
//     console.log(" Quantidade de ingressos:" + ingressos + " ingressos")
// console.log("---Valores---")
// if (tipoDeJogo === "do" && etapa === "sf" && categoria === 1) 
//     console.log("Valor do ingresso:" + (valorDoSf1 * ingressos))
// if (tipoDeJogo === "do" && etapa === "sf" && categoria === 2) 
//     console.log("Valor do ingresso:" + (valorDoSf2 * ingressos))
// if (tipoDeJogo === "do" && etapa === "sf" && categoria === 3) 
//     console.log("Valor do ingresso:" + (valorDoSf3 * ingressos))
// if (tipoDeJogo === "do" && etapa === "sf" && categoria === 4) 
//     console.log("Valor do ingresso:" + (valorDoSf4 * ingressos))
// if (tipoDeJogo === "do" && etapa === "dt" && categoria === 1) 
//     console.log("Valor do ingresso:" + (valorDoDt1 * ingressos))
// if (tipoDeJogo === "do" && etapa === "dt" && categoria === 2) 
//     console.log("Valor do ingresso:" + (valorDoDt2 * ingressos))
// if (tipoDeJogo === "do" && etapa === "dt" && categoria === 3) 
//     console.log("Valor do ingresso:" + (valorDoDt3 * ingressos))
// if (tipoDeJogo === "do" && etapa === "dt" && categoria === 4) 
//     console.log("Valor do ingresso:" + (valorDoDt4 * ingressos))
// if (tipoDeJogo === "do" && etapa === "fi" && categoria === 1) 
//     console.log("Valor do ingresso:" + (valorDoFi1 * ingressos))
// if (tipoDeJogo === "do" && etapa === "fi" && categoria === 2) 
//     console.log("Valor do ingresso:" + (valorDoFi2 * ingressos))
// if (tipoDeJogo === "do" && etapa === "fi" && categoria === 3) 
//     console.log("Valor do ingresso:" + (valorDoFi3 * ingressos))
// if (tipoDeJogo === "do" && etapa === "fi" && categoria === 4) 
//     console.log("Valor do ingresso:" + (valorDoFi4 * ingressos))
// if (tipoDeJogo === "in" && etapa === "sf" && categoria === 1) 
//     console.log("Valor do ingresso:" + ((valorDoSf1 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "sf" && categoria === 2) 
//     console.log("Valor do ingresso:" + ((valorDoSf2 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "sf" && categoria === 3) 
//     console.log("Valor do ingresso:" + ((valorDoSf3 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "sf" && categoria === 4) 
//     console.log("Valor do ingresso:" + ((valorDoSf4 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "dt" && categoria === 1) 
//     console.log("Valor do ingresso:" + ((valorDoDt1 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "dt" && categoria === 2) 
//     console.log("Valor do ingresso:" + ((valorDoDt2 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "dt" && categoria === 3) 
//     console.log("Valor do ingresso:" + ((valorDoDt3 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "dt" && categoria === 4) 
//     console.log("Valor do ingresso:" + ((valorDoDt4 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "fi" && categoria === 1) 
//     console.log("Valor do ingresso:" + ((valorDoFi1 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "fi" && categoria === 2) 
//     console.log("Valor do ingresso:" + ((valorDoFi2 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "fi" && categoria === 3) 
//     console.log("Valor do ingresso:" + ((valorDoFi3 * 4.1) * ingressos))
// if (tipoDeJogo === "in" && etapa === "fi" && categoria === 4) 
//     console.log("Valor do ingresso:" + ((valorDoFi4 * 4.1) * ingressos))

let array = [1,2,3,-1,-2,-3]
for(elemento of array){
    if (elemento < 0){
        console.log(elemento.length)
    }
    
}

    



