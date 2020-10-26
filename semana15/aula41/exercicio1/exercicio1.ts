// a) não pode atribuir numero pois e do tipo string
// const minhastring: string = "string exemplo"

// b) so usar o simbolo pipe "|" para separar os tipos de variaveis
// const meuNumero: number | string = "string exemplo"; 10

// c)
// let pessoa: {
//     nome: string
//     idade: number
//     corFavorita: string
// } ={
//     nome:"Thiago",
//     idade:28,
//     corFavorita:"preto"
    
// }
// console.log(pessoa)
// d)
// type pessoa= {
//     nome: string
//     idade: number
//     corFavorita: string
// }
// let pessoa1: pessoa = {
//     nome:"Du",
//         idade:30,
//         corFavorita:"branco"
// }
// let pessoa2: pessoa = {
//     nome:"Dudu",
//         idade:30,
//         corFavorita:"vermelho"
// }
// let pessoa3: pessoa = {
//     nome:"Edu",
//         idade:30,
//         corFavorita:"azul"
// }
// const listadepessoas: Array <pessoa> = [pessoa1, pessoa2, pessoa3]
// console.table(listadepessoas)
// e)
enum CORES{
    VERMELHO="Vermelho",
    INDIGO="Indigo",
    ROXO="Roxo",
    VERDE="Verde",
    LARANJA="Laranja",
    AMARELO="Amarelo",
    AZUL="Azul"
}
type pessoa= {
        nome: string
        idade: number
        corFavorita: CORES
    }
    let pessoa1: pessoa = {
        nome:"Du",
            idade:30,
            corFavorita:CORES.VERMELHO
    }
    let pessoa2: pessoa = {
        nome:"Dudu",
            idade:30,
            corFavorita:CORES.VERMELHO
    }
    let pessoa3: pessoa = {
        nome:"Edu",
            idade:30,
            corFavorita:CORES.VERMELHO
    }
    const listadepessoas: Array <pessoa> = [pessoa1, pessoa2, pessoa3]
    console.table(listadepessoas)