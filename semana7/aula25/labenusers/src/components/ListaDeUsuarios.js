import React from "react";
import axios from "axios";
// import { baseUrl, axiosConfig } from "../constants/axiosConstants";
export default class ListaDeUsuarios extends React.Component {

    state = {
        valorNome: "",
        valorEmail: ""
    }
  
    render() {
      return (  
        <div>
            <h1>Usuarios</h1>
        </div>

      );
    }
}
  