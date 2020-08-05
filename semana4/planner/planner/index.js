function addValor(){
    const input = document.getElementById("tarefa")
    let valor = input.value

    const listaDias = document.getElementById("dias-semana")
    let diaSelect = listaDias.value
    
    const diaSelecionado = document.getElementById(diaSelect)
    diaSelecionado.innerHTML += `<p>${valor}</p>`
    input.value = ""
}
