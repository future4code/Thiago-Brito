import React,{useEffect,useState} from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import { useForm } from "../hooks/useForm";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Thiago-Jackson";
  
export default function CreateTripPage() {
  const { form, onChange, resetState } = useForm({
    name: "",
    planet:"",
    date: "",
    description: "",
    duration:""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    console.log(form);
    resetState();
  };

  const history = useHistory()
  const goToHome = () =>{
    history.push("/")
  }
  const goToTrip = () =>{
    history.push("/trips/details")
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      createTrip();
    } else {
      history.push("/login");
    }
  }, [history]);

  const createTrip = () => {
    const body = {
      name:form.name,
      planet:form.planet,
      date:form.date,
      description:form.description,
      duration:form.duration
    }
    
    axios 
      .post(`${baseUrl}/trips/`,body, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
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
          pattern="^(?=.{5,})\p*(\s\p *)?$"
          title="Nó minimo 5 letras"
          placeholder="nome"
          required
        />
        <input
          value={form.planet}
          name="planet"
          onChange={handleInputChange}
          type="text"
          placeholder="planeta"
          required
        />
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
      <button onClick={goToTrip}>Detalhes da viagem</button>
    </div>
  );
}

