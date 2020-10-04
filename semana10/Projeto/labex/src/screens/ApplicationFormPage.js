import React,{useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import { useForm } from "../hooks/useForm";
import axios from "axios"

export default function ApplicationFormPage() {
  const history = useHistory()
  const[selectCountry, setSelectCountry] = useState([])
  const { form, onChange, resetState, } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country:[]

  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmittion = (event) => {
    event.preventDefault();

    console.log(form);
    resetState();
  };
  const goToHome = () =>{
    history.push("/")
  }
  const getCountry = () =>{
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response)=>{
      setSelectCountry(response.data)
      console.logo(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(() => {
    getCountry()
  }, []);

  return (
    <div>
      <div className="App">
      <form onSubmit={handleSubmittion}>
        <input
          value={form.name}
          name="primeiroNome"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{3,}"
          title="Nó minimo 3 letras"
          placeholder="nome"
          required
        />
        <input
          value={form.age}
          name="idade"
          onChange={handleInputChange}
          min="18"
          type="number"
          placeholder="idade"
          required
        />
        <input
          value={form.applicationText}
          name="application"
          onChange={handleInputChange}
          type="text"
          placeholder="Por que sou um bom candidato"

          required
        />
         <input
          value={form.profession}
          name="profession"
          onChange={handleInputChange}
          type="text"
          placeholder="Profissão"
          required
        />
        <select
          value={form.country}
          name="country"
          onChange={handleInputChange}
          type="text"
          placeholder="País"
          required
        >
          {selectCountry.map((parametro)=>{
            return(<option key={parametro.name}>{parametro.name}</option>)
          })}
        </select>  
        <button>Enviar</button>
      </form>
    </div>
    
    </div>
  );
}
