import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";

class Posts extends React.Component {
  
state = {
  etapa: 1,
};
 
    
  render() {
    return (
      <div>
           
          <button onClick={this.proximaEtapa}>Próxima etapa</button>
        
      </div>
    );
  }
}

export default Posts;
