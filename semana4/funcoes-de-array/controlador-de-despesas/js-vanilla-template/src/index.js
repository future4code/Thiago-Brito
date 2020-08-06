function despesaInput(){
    const valorInput = document.getElementById("valor")
    const tipo = document.getElementsByClassName("tipo")
    const descricao = document.getElementById("descricao")
    
    const novaDespesa= {
        valor: valorInput.value,
        tipo: tipo.value,
        descricao: descricao.value,
    }
    
    valorInput.value=""
    tipo.value = ""
    descricao.value = ""
}
