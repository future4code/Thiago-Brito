import React from 'react';
import {create, config} from "./constants/constants"
import CriarPlaylist from './components/CriarPlaylist/CriarPlaylist';
import ListarPlaylist from './components/ListarPlaylist/ListarPlaylist';
import PlaylistSelecionada from './components/PlaylistSelecionada/PlaylistSelecionada';

export default class App extends React.Component{
   state ={
     paginaAtual:"CriarPlaylist",
     idMusicas:""
   }
   mudarPaginaListar = (idParametro) => {
    this.setState({paginaAtual:"ListarPlaylist",idMusicas:idParametro})
   };
   mudarPaginaPlayList = () => {
    this.setState({paginaAtual:"PlaylistSelecionada"})
   };
   mudarPaginaCriar = () => {
    this.setState({paginaAtual:"CriarPlayList"})
   };
s
  render(){
    const paginaAtual = () =>{
      if (this.state.paginaAtual === "CriarPlaylist"){
        return <CriarPlaylist funcaoListarPlaylist ={this.mudarPaginaListar} />;
      } else if (this.state.paginaAtual === "ListarPlaylist"){
        return <ListarPlaylist funcaoPlaylist ={this.mudarPaginaPlayList} funcaoVoltarMenu={this.mudarPaginaCriar}/>
      }else if (this.state.paginaAtual === "PlaylistSelecionada"){
        return <PlaylistSelecionada funcaoListPlaylist={this.mudarPaginaListar}funcaoId={this.state.idMusicas}/>
      }
      console.log(this.state.paginaAtual)
    }
    return (
      <div>
       {paginaAtual()}
      </div>
    );
  }

}