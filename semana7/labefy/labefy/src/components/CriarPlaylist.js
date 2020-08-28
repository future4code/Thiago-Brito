import React from 'react';
import logo from './logo.svg';
import axios from "axios"
import './App.css';

 class App extends React.Component{
   state ={
    nome:"",
   }
   onChangeName = (event) => {
    this.setState({ nome: event.target.value});
   
   criarPlaylist = () => {
       const body = {
         name:"this.state.nome"
       }
       axios
       .post(create,body,config)
       .then((resposta)=>{
         this.setState({nome:""});
       })
       .catch((error)=>{
         console.log(error.message);
       });
   };

  render(){
    return (
      <div className="App">
        <input
        value={this.state.nome}
        onChange={this.onChangeName}
        placeholder="Adicionar Playlist"
        >

        </input>
      </div>
    );
  }

}

export default CriarPlaylist;
