import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/Axios.constants"
import styled from "styled-components"
import {Button, Input} from '@material-ui/core'

const DivListaGeral = styled.div`

  display:grid;
  width:100%;
  grid-template:1fr;
  justify-content:center;
  text-align:center;

  `
const DivLista = styled.div`

  display:grid;
  width:100%;
  /* grid-template:1fr; */
  /* justify-content:center; */

  `

const Delete = styled.span`
  color: red;
  font-size:30px;
  `
  const Inputlista = styled.span`
  color: black;
  font-size:20px;
  font-weight:bold;
  
  `
export default class ListaDeUsuarios extends React.Component {

    state = {
        users: []
    };
    componentDidMount =() => {
        this.pegarUsuario()
        }
    pegarUsuario = async () => {
        try{
            const resposta = await axios.get(baseUrl,axiosConfig );
            this.setState({users:resposta.data});
            this.pegarUsuario()
        }   catch (error){
             console.log(error.message)
        }
    };

    deletarUsuario = async (userId) => {
        try{
            const request = await axios.delete(`${baseUrl}/${userId}`, axiosConfig)
                alert(`Usuário deletado com sucesso`)
        }
        catch (error){
            alert(error)
            console.log(error.message)
        }
    }
    render() {
      return (  
        <DivListaGeral>
            <DivLista>
                <h1>Usuarios Cadastrados</h1>
            </DivLista>
            {this.state.users.map((user) => {
                return(
                    <Inputlista key={user.id}>
                        {user.name}
                        <Delete onClick={()=> this.deletarUsuario(user.id)}>
                            {" "}
                            x
                        </Delete>
                    </Inputlista>
                );
            })}

        </DivListaGeral>

      );
    }
}
  