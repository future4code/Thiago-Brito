function despesaInput(){
    const valorInput = document.getElementById("valor")
    const tipo = document.getElementById("tipo")
    const descricao = document.getElementById("descricao")
    
    const novaDespesa= {
        valor: valorInput.value,
        tipo: tipo.value,
        descricao: descricao.value,
        
    }
    console.log(novaDespesa)
    valorInput.value=""
    tipo.value = ""
    descricao.value = ""

    ListaDeDespesas = []
    ListaDeDespesas.push(novaDespesa)
    console.log(ListaDeDespesas )

    if (valorInput.value !== "" && tipo.value !== ""  && descricao.value !== "") {
    } else {
        alert("Por favor preencha todos os campos")
    }
}
