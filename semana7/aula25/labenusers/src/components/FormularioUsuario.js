import React from "react"
import axios from "axios"
import { baseUrl, axiosConfig } from "../constants/Axios.constants";
import styled from "styled-components"
import {Button, Input} from '@material-ui/core'

const DivFormulario = styled.div`

  display:grid;
  width:100%;
  grid-template:1fr;
  justify-content:center;

  `
  const DivEntreLinhas = styled.div`
  display:grid;
  margin:10px;
  align-self:center;
  justify-content:center;
  `


export default class FormularioUsuario extends React.Component {
    state = {
        valorNome: "",
        valorEmail: ""
    }

    criarUsuario = async () =>{
        const body ={
            name:this.state.valorNome,
            email:this.state.valorEmail
        }
        try{
            const criaUsuario = await axios.post(baseUrl,body,axiosConfig);
            alert(`Usuário ${this.state.valorNome} criado com sucesso       `)
        }
        catch(error){
            alert(error)
            console.log(error.message)
        }   
    }
    onChangeNome = (event) => {
        this.setState({valorNome:event.target.value})
    };
    onChangeEmail = (event) =>{
        this.setState({valorEmail:event.target.value})
    };

    render() {
      return (
        <DivFormulario>
            <DivEntreLinhas>   
        <Input variant = "contained" 
            value={this.state.valorNome}
            onChange={this.onChangeNome}
            placeholder="Nome"
        />
            </DivEntreLinhas>
        <DivEntreLinhas>   
        <Input variant = "contained" 
           value={this.state.valorEmail}
           onChange={this.onChangeEmail}
           placeholder="Email"
        />
        </DivEntreLinhas>
        <Button variant="contained" color="primary" onClick ={this.criarUsuario}>Criar Usuario</Button>
        </DivFormulario>
      );
    }
  }