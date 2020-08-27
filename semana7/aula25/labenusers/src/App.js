import React from 'react';
// import axios from "axios"
import ListaDeUsuarios from "./components/ListaDeUsuarios"
import FormularioUsuario from "./components/FormularioUsuario"
import styled from "styled-components"
import {Button} from '@material-ui/core'
import withstyles  from "@material-ui/core/styles"
const DivApp = styled.div`
   display:grid;
  grid-template: 1fr;
  align-content:center;
  justify-content:center;
  margin-top:10px;
  `

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
        <DivApp>
        <Button variant="contained" color="secondary" onClick={this.mudaPagina}>Mudar Pagina</Button>
        </DivApp>
      </div>
    );
  }
}
