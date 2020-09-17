import React from "react";
import {useHistory} from 'react-router-dom'
import { useForm } from "../hooks/useForm";


export default function ApplicationFormPage() {
  const history = useHistory()
  const { form, onChange, resetState } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country:""
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
          required
        />
        <input
          value={form.age}
          name="idade"
          onChange={handleInputChange}
          min="18"
          type="number"
          required
        />
        <input
          value={form.applicationText}
          name="application"
          onChange={handleInputChange}
          type="text"
          required
        />
         <input
          value={form.profession}
          name="profession"
          onChange={handleInputChange}
          type="text"
          required
        />
        <input
          value={form.country}
          name="country"
          onChange={handleInputChange}
          type="text"
          required
        />  
        <button>Enviar</button>
      </form>
    </div>
    
    </div>
  );
}
