import React from "react";
class Etapa1 extends React.Component{
    render(){
        return(
            <div>
                <h1> Dados gerais  </h1>
                    <input type="text">1-Qual é seu nome?</input>
                    <input type="text">2-Qual é sua idade?</input>
                    <input type="text">3-Qual é seu email?</input>
                    <input type="text">4-Qual é sua escolaridade?</input>
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


                       
              
                    
            </div>

        );
    }
}
export default Etapa1;