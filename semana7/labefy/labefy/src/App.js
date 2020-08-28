import React from 'react';
import {create, config} from "./constants/constants"
import CriarPlaylist from './components/CriarPlaylist';
import ListarPlaylist from './components/ListarPlaylist';

export default class App extends React.Component{
   state ={
     paginaAtual:"CriarPlaylist"
   }
   mudarPagina = () => {
    this.state.paginaAtual === "CriarPlaylist"
      ? this.setState({ paginaAtual: "ListarPlaylist" })
      : this.setState({ paginaAtual: "CriarPlaylist"})
   };

  render(){
    const paginaAtual = () =>{
      if (this.state.paginaAtual === "CriarPlaylist"){
        return <CriarPlaylist/>;
      } else if (this.state.paginaAtual === "ListarPlaylist"){
        return <ListarPlaylist/>
      }
      
    }
    return (
      <div>
        {paginaAtual()}
        <button onClick={this.mudarPagina}>mudar pagina</button>
      </div>
    );
  }

}