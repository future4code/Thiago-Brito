import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import retrato from "./img/eu2.png"
import cna from "./img/cna.png"
import amaggi from "./img/amaggi.png"
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from "./img/gmail.png"
import location from "./img/localizacao.jpg"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={retrato}
          nome="Thiago Brito" 
          descricao="Oi, Meu nome é Thiago. Sou Engenheiro de formação e estudante do curso de full-stack dev da labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={cna} 
          nome="CNA Escola de Idiomas" 
          descricao="Ensinando um pouco mais que o verbo to be" 
        />
        
        <CardGrande 
          imagem={amaggi}
          nome="Amaggi-agro" 
          descricao="O menino do meio ambiente." 
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
        imagem={email}
        descricao="tbrito@gmail.com"
        />
        
        <CardPequeno
        imagem={location}
        descricao="Rua X - SJDQM-MT"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
