/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")){

   const carta = comprarCarta();
   let cartasUsuario = comprarCarta()
   let cartasUsuario2 = comprarCarta()
   let cartaComputador = comprarCarta()
   let cartaComputador2 = comprarCarta()
   let pontosUsuario = cartasUsuario.valor +  cartasUsuario2.valor
   let pontosComputador = cartaComputador.valor + cartaComputador2.valor

console.log( "Usuário - cartas: ", cartasUsuario.texto, cartasUsuario2.texto, "- Pontuação", cartasUsuario.valor + cartasUsuario2.valor ) 
console.log( "Computador - cartas: ", cartaComputador.texto, cartaComputador2.texto, "- pontuação", cartaComputador.valor + cartaComputador2.valor)
if(pontosUsuario === pontosComputador ){
   console.log("empatou!")
} else if(pontosUsuario > pontosComputador){
   console.log("Usuário venceu!")
} else if(pontosUsuario < pontosComputador){
   console.log("Computador venceu!")
}
} else{
   console.log("O jogo acabou!")
}
