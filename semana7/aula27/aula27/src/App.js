import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import styled from "styled-components";
import axios from "axios";
import {Button, Input} from '@material-ui/core'


const Imagem = styled.img`
max-height:30vh;
max-width:20vw;
`
const Logo = styled.img`
max-height:25vh;
`
const Text = styled.p`
font-weight:bold;
`
const WrapperDiv = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-template-rows:1fr 1fr 1fr;
flex-direction:column;
height:100vh;
`
const LogoDiv = styled.div`
display:grid;
grid-row:1;
grid-column:2;
`
const ContentDiv = styled.div`
display:grid;
grid-row:2;
grid-column:2;
align-self:center;

`
const ButtonDiv = styled.div`
display:grid;
grid-row:3;
grid-column:2;
width:10vw;
height: 5vh;

`
export default class App extends React.Component {
state ={
  name:"",
  img:"",
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
      img: response.data[0].img,
      status: response.data[0].status,
      nickname: response.data[0].nickname,
    })
  })  
  .catch((error)=> {
    console.log(error)
  })
}
  render(){

    console.log(this.state)  
    return (
      <WrapperDiv>
        <LogoDiv>
        <Logo src="img/walterwhite.png" alt=""></Logo>
        </LogoDiv>
        <ContentDiv>
       <h1>Breaking Bad Random Character Generator</h1>
       <Imagem src={this.state.img}></Imagem>
       <p><strong>Name:</strong>  {this.state.name}</p>
       <p><strong>Nickname:</strong> {this.state.nickname}</p>
        <p><strong>Status:</strong> {this.state.status}</p>
        </ContentDiv>
        <ButtonDiv>
          <Button variant="contained" color="secondary" onClick={this.randomCharacter}>New Character</Button>
        </ButtonDiv>
       </WrapperDiv>
    );
  }
  }


