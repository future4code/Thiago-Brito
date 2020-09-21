import React,{useEffect,useState} from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import { useForm } from "../hooks/useForm";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Thiago-Jackson/trips";
  
export default function CreateTripPage() {
  const { form, onChange, resetState } = useForm({
    name: "",
    planet:"",
    date: "",
    description: "",
    duration:""
  });
  const planetsArray = [
    {name:"selecione um planeta"},
    {name:"mercurio"},
    {name:"venus"},
    {name:"terra"},
    {name:"marte"},
    {name:"jupiter"},
    {name:"saturno"},
    {name:"urano"}, 
    {name:"netuno"}]
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    createTrip();
    resetState();
  };

  const history = useHistory()
  const goToHome = () =>{
    history.push("/")
  }
  
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
    console.log(form.name, form.planet)
  }, [history, planetsArray]);

  const createTrip = () => {
    const body = {
      name:form.name,
      planet:form.planet,
      date:form.date,
      description:form.description,
      durationInDays:form.duration
    }
   
    axios.post(`${baseUrl}`,body, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>
          Criar viagem
      </h1>
      <form onSubmit={handleSubmission}>
        <input
          value={form.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          pattern="(\D{5,}\s*)"
          title="No minimo 5 letras"
          placeholder="nome"
          required
        />
        <select
          value={form.planet}
          name="planet"
          onChange={handleInputChange}
          type="planet"
          required
        >
        {planetsArray.map((p)=>{
          return(
            <option key={p.name}>
              {p.name}
            </option>
          )
        })
      }
        </select>
        <input
          value={form.date}
          name="date"
          onChange={handleInputChange}
          type="date"
          required
        />
        
         <input
          value={form.description}
          name="description"
          onChange={handleInputChange}
          type="text"
          placeholder="descrição"
          required
        />

        <input
          value={form.duration}
          name="duration"
          onChange={handleInputChange}
          type="number"
          placeholder="duração"
          required
        />  
        <button>Enviar</button>
      </form>
      <button onClick={goToHome}>Home</button>
    </div>
  );
}

