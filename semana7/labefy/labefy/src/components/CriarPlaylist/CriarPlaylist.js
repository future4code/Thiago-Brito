import React from 'react';
import axios from "axios";
import {create, config} from "../../constants/constants";



export default class CriarPlaylist extends React.Component{
  state = {
    nome:"",
   }
   onChangeName = (event) => {
    this.setState({ nome: event.target.value});
   }
   criarPlayList = () => {
       const body = {
         name:this.state.nome
       };
       axios
       .post(create,body,config)
       .then((resposta)=>{
            console.log(resposta) 
        this.setState({nome:""});

       })
       .catch((error)=>{
         console.log(error.message);
       });
   }  

  render(){
    return (
      <div className="App">
        <input
        value={this.state.nome}
        onChange={this.onChangeName}
        placeholder="Adicionar Playlist"
        />
        <button onClick={this.criarPlayList}>Criar Nova Playlist</button>
      </div>
    );
  }
  }  

