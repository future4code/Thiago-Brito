
import React from 'react';
import axios from "axios";
import {config, baseUrl,} from "../../constants/constants";


export default class PlaylistSelecionada extends React.Component{

  state = {
    listaDeMusicas:[],
    nomeArtista:"",
    nomeMusica:"",
    urlMusica:""
  }
  onChangeNomeArtista = (event) => {
    this.setState({ nomeArtista: event.target.value});
  }
  onChangeNomeMusica = (event) => {
      this.setState({ nomeMusica: event.target.value});
  }
  onChangeUrlMusica = (event) => {
        this.setState({ urlMusica: event.target.value});
  }
    visualizarPlaylist = () => {
        axios.get(`${baseUrl}/${this.props.funcaoId}/tracks`,config)
        .then ((resposta)=>{
          this.setState({listaDeMusicas:resposta.data.result.tracks})
          console.log(resposta)
          })
        .catch((erro)=>{
          console.log(erro)
        })
       };
      
    editarPlaylist =() => {
      const body ={
        name:this.state.nomeMusica,
        artist:this.state.nomeArtista,
        url:this.state.urlMusica
      };
      axios
      .post(`${baseUrl}/${this.props.funcaoId}/tracks`,body,config)
      .then((resposta) =>{
        console.log(resposta.message)
        this.setState({nomeArtista:"", nomeMusica:"", urlMusica:""})
      })
      .catch((erro)=> {
        console.log(erro.message)
      });
    }
    componentDidMount() {
      this.visualizarPlaylist()
    }
    render(){
        return(
            <div>
          
              <div>
                  <input
                  value={this.state.nomeArtista}
                  onChange={this.onChangeNomeArtista}
                  placeholder="Artista"
                  />
                  <input
                  value={this.state.nomeMusica}
                  onChange={this.onChangeNomeMusica}
                  placeholder="Musica"
                  />
                  <input
                  value={this.state.urlMusica}
                  onChange={this.onChangeUrlMusica}
                  placeholder="Url "
                  />
                  <button onClick={this.editarPlaylist}>Editar</button>
                  <button onClick={this.props.funcaoListarPlaylist}>Voltar</button>
              </div>
              {this.state.listaDeMusicas.map((musicas)=>{ console.log(this.state.listaDeMusicas)
            return(
            <p key={musicas.id}>Artista:{musicas.artist}Musica:{musicas.name}Url:<audio controls>{musicas.url}</audio></p>
          )
        })}
            </div>
        );
    }
}