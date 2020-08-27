import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
// import styled from styled.Components
import axios from "axios"

export default class App extends React.Component {
state ={

  name:"",
  birthday:"",
  img: "",
  status: "",
  nickname: "",
}

componentDidMount(){  
  this.randomCharacter()
}
randomCharacter = () =>{
  axios.get("https://www.breakingbadapi.com/api/character/random")
  .then((response)=> {
    console.log(response)
    this.setState({
      name: response.data[0].name,
      birthday: response.data[0].birthday,
      img: response.data[0].img,
      status: response.data[0].status,
      nickname: response.data[0].nickname
    })
  })  
  .catch((error)=> {
    console.log(error)
  })

}
  render(){

    console.log(this.state)  
    return (
      <div className="App">
       <h1>Gerar Personagem Aleatorio</h1>
       <img src={this.state.img}/>
       <p>{this.state.name}</p>
       <p>{this.state.birthday}</p>
       <p>{this.state.nickname}</p>
       <p>{this.state.status}</p>
       <button onClick={this.randomCharacter}>Novo Personagem</button>
      </div>
    );
  }
  }


