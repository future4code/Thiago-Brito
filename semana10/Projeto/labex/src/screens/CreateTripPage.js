import React,{useState, useEffect} from "react";
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

  const handleSubmittion = (event) => {
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
    axios
      .post(`${baseUrl}/trip/`, {
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
      <form onSubmit={handleSubmittion}>
        <input
          value={form.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{3,}"
          title="Nó minimo 3 letras"
          required
        />
        <input
          value={form.planet}
          name="planet"
          onChange={handleInputChange}
          type="text"
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
          required
        />
        <input
          value={form.duration}
          name="duration"
          onChange={handleInputChange}
          type="number"
          required
        />  
        <button>Enviar</button>
      </form>
      <button onClick={goToHome}>Home</button>
      <button onClick={goToTrip}>Detalhes da viagem</button>
    </div>
  );
}

