import React from 'react';
import axios from "axios";
import {create, config} from "../../constants/constants";



export default class CriarPlaylist extends React.Component{
  state = {
    nome:"",
   }
   onChangeName = (event) => {
    this.setState({ nome: event.target.value});
    // console.log (onChangeName)
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
       .catch((erro)=>{
         console.log(erro.message);
       });
      }
  render(){
    return (
      <div>
        <input
        value={this.state.nome}
        onChange={this.onChangeName}
        placeholder="Adicionar Playlist"
        />
        <button funcaoCriar={this.criarPlayList}>Criar Nova Playlist</button>
        <button onClick={this.props.funcaoListarPlaylist}>mudar pagina</button>
      </div>
    );
  }
  }  

