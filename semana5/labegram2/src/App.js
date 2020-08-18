import React from 'react';
import styled from "styled-components"
const Usuario = styled.span`
color:orange;
`
class App extends React.Component { 
 state = {
   post: [
   {
    nomeUsuario:"paulinha",
    fotoUsuario:"https://picsum.photos/50/50",
    fotoPost:"https://picsum.photos/200/150"
   
   },
   {
    nomeUsuario:"João",
    fotoUsuario:"https://picsum.photos/50/52",
    fotoPost:"https://picsum.photos/200/155"
   },
   {
    nomeUsuario:"Maria",
    fotoUsuario:"https://picsum.photos/50/53",
    fotoPost:"https://picsum.photos/200/151"
   }
   ],
   valorInputUsuario:"",
   valorInputFotoUsuario:"",
   valorInputPost:""
 };

 adicionaPost = () => {
   const novoPost ={
     nomeUsuario: this.state.valorInputUsuario, 
     fotoUsuario: this.state.valorInputFotoUsuario,
     fotoPost: this.state.valorInputPost
   };
   const novosPosts = [...this.state.post, novoPost];
   this.setState({post:novosPosts});
 };
    onChangeInputUsuario = (event) =>{
      this.setState({valorInputUsuario: event.target.value});
    };

    onChangeInputFotoUsuario = (event) =>{
      this.setState({valorInputFotoUsuario: event.target.value});
    };

    onChangeInputPost = (event) =>{
      this.setState({valorInputPost: event.target.value});
    };

  render() {
    const listaDePosts = this.state.post.map((post) =>{
      return (
        <div>
          <p><Usuario>{post.nomeUsuario}</Usuario></p>
          <img src = {post.fotoUsuario}/>
          <img src = {post.fotoPost} />
        </div>
      )
        
    })
    return(
      <div>
        <div>
        <input
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"usuário"}
        />
        <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Foto usuário"}
        />
        <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputPost}
          placeholder={"Postar foto"}
        />
        <button onClick={this.adicionaPost}>Adicionar</button>
      </div>
      <div>{listaDePosts}</div>
    </div>  
    );
  }
}

export default App;
  