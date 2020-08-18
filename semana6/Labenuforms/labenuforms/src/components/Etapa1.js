import React from "react";
class Etapa1 extends React.Component{
    render() {
        return(
            <div>
                <h1> Dados gerais  </h1>
                    <h3>1-Qual é seu nome?</h3>
                    <input></input>
                    <h3>2-Qual é sua idade?</h3>
                    <input></input>
                    <h3>3-Qual é seu email?</h3>
                    <input></input>
                    <h3>4-Qual é sua escolaridade?</h3>
                    <select>
                        <option>  
                            "Ensino médio incompleto",
                        </option>
                        <option>
                            "Ensino médio completo",
                        </option>
                        <option>
                        "Ensino superior incompleto",
                        </option>
                        <option>
                        "Ensino superior completo"
                        </option>
                    </select>
            </div>

        );
    }
}
export default Etapa1;