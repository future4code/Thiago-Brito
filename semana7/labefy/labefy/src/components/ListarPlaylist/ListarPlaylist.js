
import React from 'react';
import axios from "axios";
import {create, config, baseUrl,} from "../../constants/constants";
import {BotaoDeletar} from './styled'


export default class ListarPlaylist extends React.Component{
   state ={
    listaDePlaylists:[],
    // listaDeMusicas:[]
    // id:"",
    // nome:"",
   }
   componentDidMount = () => {
     this.pegarPlaylists();
   };

   pegarPlaylists = () =>{
     axios.get(create,config)
     .then((resposta)=>{
        this.setState({listaDePlaylists:resposta.data.result.list})
        console.log(resposta)
     })
     .catch((erro)=>{
      console.log(erro.message);
     });
   };

   deletarPlaylist = (id) => {
      axios
     .delete(`${baseUrl}/${id}`, config)
     .then((resposta)=>{
      this.pegarPlaylists();
      console.log(resposta.message)
     })
     .catch((erro) =>{
      console.log(erro.message);
     });
   };




  render() {
    return (
      <div>
        {this.state.listaDePlaylists.map((listaPlaylist)=>{
          return(
        <div>
          <div key={listaPlaylist.id} ><b onClick={()=>this.props.funcaoPlaylist(listaPlaylist.id)}>{listaPlaylist.name}</b>
            <BotaoDeletar onClick={() => this.deletarPlaylist(listaPlaylist.id)}>
              {" "}
              X
            </BotaoDeletar>
         </div> 

        </div>
          );
        })}
        <div>      
        <button variant="contained" color="primary" onClick={this.props.funcaoVoltarMenu}>Voltar</button>
        </div> 
    </div>
    );
  }

}