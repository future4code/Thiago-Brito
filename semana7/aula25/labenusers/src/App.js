import React from 'react';
import axios from "axios"
import './App.css';

export default class App extends React.Component {
 state = {
   nome:[],
   email:[],
   listaUsuario: ""
 };

  createUsers = () => {
  const body ={
    name:this.state.nome,
    name:this.state.email
  };

  const request = axios.post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body,
    {
      headers:{
        authorization: "Thiago-Brito-Jackson"
      }
    }
  );

}
}

