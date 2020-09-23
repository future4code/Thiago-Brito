// Exercicios de interpretação de código
// Exercicio 1
// console.log(valor)
// o codigo é um loop composto por uma variavel (valor) que inicalmente tem valor 0, e a variavel (i) tambem = 0,
//  toda vez que (i) for menor que 5,(i) terá um incremento de +1, e posteriormente (valor) vai ser incrementado apartir do valor de (i)
//  O resultado impresso na tela no final sera 10.
// Exercicio 2
// a) 19, 21, 23, 25, 27, 30
// b) foi necessario adicionar uma variavel extra para o index (index = 0)
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let index = 0
// for (let numero of lista) {
//     console.log(index)
//     console.log(numero)
// }
// Exercicios de escrita de codigo
// Exercicio 3
// a)
// const array = [15, 36, 12, 56, 13, 37, 4, 21, 10]
// for (let numero of array){
// console.log(numero)
// }
// b)
// for (let numero of array){
//     console.log(numero / 10)
// }
// c)
// for (let paresArray of array){
// if (paresArray % 2 === 0){
// console.log(paresArray)
// }
// }
// d)
// for (let i=0; i < array.length; i++){
//     console.log(`O elemento do index ${i} é ${array[i]}`)
// }
// // e)
    // let maior = array[0]
    // let menor = array[0]
    // for (let numero of array){
    //     if (numero > maior){
    //         maior = numero
    //     }
    //     else if (numero < menor)
    //         menor = numero
    // }
    // console.log(`O maior numero é ${maior} e o menor é ${menor}`)

    let array = [1,2,3,-1,-2,-3]
    let negativo = []
 numerosNegativos = () => {
    for(elemento of array){
        if (elemento < 0){
            negativo.push("elemento")
           return numerosNegativos
        }

 }

}
console.log(negativo)