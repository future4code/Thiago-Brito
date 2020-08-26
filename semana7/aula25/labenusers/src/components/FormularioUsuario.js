import React from "react"
import axios from "axios"
// import { baseUrl, axiosConfig } from "../constants/axiosConstants";
export default class FormularioUsuario extends React.Component {
    state = {
        
    }
  
    render() {
      return (
        <div>   
        <input 
            value={this.state.nameValue}
            onChange={this.onChangeName}
            placeholder="nome"
        />
        <input 
           value={this.state.emailValue}
           onChange={this.onChangeEmail}
           placeholder="Email"
        />
        <button>Criar Usuario</button>
        </div>
      );
    }
  }