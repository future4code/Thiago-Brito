arrayDeObjetos = []
function dataStorage(event){
    const tituloPost = document.getElementById("titulo-post")
    const autorPost = document.getElementById("autor-post")
    const conteudoPost = document.getElementById("conteudo-post")

    const post = {
    titulo: tituloPost.value,
    autor: autorPost.value, 
    conteudo: conteudoPost.value
    }

    arrayDeObjetos.push(post)
    console.log(arrayDeObjetos)
    console.log(post)
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""
}
    
    function apertouBotao(){  
        dataStorage()
        const containerPost = document.getElementById("container-de-posts")
        containerPost.innerHTML += `<p>${arrayDeObjetos[0].titulo}<p> <p>${arrayDeObjetos[0].autor}</p> <p>${arrayDeObjetos[0].conteudo}</p>`
        
    }
    
    
