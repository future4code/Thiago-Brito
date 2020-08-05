arrayDeObjetos = []
function dataStorage(){
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
    
    function apertouBotao(evento){  
        const containerPost = document.getElementById("container-de-posts")
        containerPost.innerHTML += `<p>${tituloPost.value}<p> <p>${autorPost.value}</p> <p>${conteudoPost.value}</p>`
    
        dataStorage()
    }
    
    
}
