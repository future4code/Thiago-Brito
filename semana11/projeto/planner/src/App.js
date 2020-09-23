import React from 'react';
import './App.css';
import Axios from "axios"

function App() {



  return (
    <div>
      <input>
      Nova Tarefa
      </input>
      <select>
        <option>
          Segunda-feira
        </option>
        <option>
          Terça-feira
        </option>
        <option>
          Quarta-feira
        </option>
        <option>
          Quinta-feira
        </option>
        <option>
          Sexta-feira
        </option>
        <option>
          Sabado
        </option>
        <option>
          Domingo
        </option>
      </select>
      <div>
        <p>Segunda-feira</p>
      </div>
      <div>
        <p>Terça-feira</p>
      </div>
      <div>
        <p>Quarta-feira</p>
      </div>
      <div>
        <p>Quinta-feira</p>
      </div>
      <div>
        <p>Sexta-feira</p>
      </div>
      <div>
        <p>Sabado</p>
      </div>
      <div>
        <p>Domingo</p>
      </div>

    </div>
  );
}

export default App;
