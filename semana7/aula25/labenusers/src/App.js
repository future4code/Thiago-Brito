import React from 'react';
import axios from "axios"
import './App.css';

export default class App extends React.Component {
 state = {
   listaUsuario: [],

 };


  listarUsuario = () => {
    const request = axios.get(
       `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users` ,
      {
        headers: {
          Authorization: "Thiago-Brito-Jackson"
        }
      }
      
    );
    request
      .then((resposta) => {
        this.setState({ listaUsuario: resposta.data});
        console.log(resposta.data)
      })
      .catch((erro)=>{
        console.log("Ocorreu um erro")
      });
      console.log(request)
  };
  createUsers = (nome, email) => {
    const body ={
      name:nome,
      email:email
    };

    const request = axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
    body,
    {
      headers:{
        Authorization: "Thiago-Brito-Jackson"
      }
    }
  );
  request
    .then((resposta)=> {
      console.log(resposta)
      alert(`Usuário ${resposta} foi criado com sucesso`)
      this.listaUsuario();
      this.setState({nomeUsuario:""});
    })
    .catch((erro) =>{
      console.log("erro");
    });
    console.log(request)
  };
  componentDidMount(){
    this.listarUsuario();
  }
  onChangeInputUsuario = (evento) => {
    this.setState({name:evento.target.value});
  }
  onChangeInputEmail = (evento) => {
    this.setState({email:evento.target.value});
  }
  render(){
    const criarUsuario = () => {
      this.createUsers(this.state.name, this.state.email)
    }
    return(
        <div className="App">
          <h1>Insira usuario</h1>
          <input value={this.nomeUsuario} onChange={(event)=>this.onChangeInputUsuario(event)}/>
          <input value={this.emailUsuario} onChange={(event)=>this.onChangeInputEmail(event)}/>
          <button onClick={criarUsuario}>criar</button>
          <h2>usuarios</h2>
          {this.state.listaUsuario.map((item) =>{
            return(
            <div>
              <p key={item.id}>{item.nome}</p>
              </div>)
            })}
        </div>
      );
      }
  };
  


