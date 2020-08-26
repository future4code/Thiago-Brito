import React from 'react';
import axios from "axios"
import styled from "styled-components"
import ListaDeUsuarios from "./components/ListaDeUsuarios"
import FormularioUsuario from "./components/FormularioUsuario"

export default class App extends React.Component {
 state = {
  paginaAtual:"formularioUsuario",
 };

 mudaPagina = () => {
   this.state.paginaAtual === "formularioUsuario"
   ? this.setState({ paginaAtual:"listaDeUsuarios"}):
   this.setState({paginaAtual:"formularioUsuario"});     
 };

  render(){
    const paginaAtual = () => {
      if (this.state.paginaAtual === "formularioUsuario"){
        return <FormularioUsuario />
      } else if (this.state.paginaAtual === "listaDeUsuarios"){
        return <ListaDeUsuarios />
      }
      
    };
    return(
      <div>
        {paginaAtual()}

        <button onClick={this.mudaPagina}>Mudar Pagina</button>
      </div>
    );
  }
}
