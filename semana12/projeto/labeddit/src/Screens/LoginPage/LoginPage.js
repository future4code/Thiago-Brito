import axios from 'axios';
// import { TextField } from '@material-ui/core';
import React from 'react';
import useForm from '../../Hooks/UseForm';
// import TextField from '@material-ui/core/TextField'



export default function LoginPage() {
  const {form, onChange, resetState} = useForm({email:"", password:""})
  
  const userLogin =()=>{
    const body = {email:form.email, password:form.password}
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", body)
    .then((response)=>{
      window.localStorage.setItem("token",response.data.token)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  const handleForm = (event) =>{
    const {name,value} = event.target
    onChange (name, value)
  }

  const submitForm = (event) =>{
    event.preventDefault()
    userLogin()
    resetState()
  }

  return (

    <div>
            <h1>LoginPage</h1>
      <form
        onSubmit={submitForm}
      >
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleForm}     
          placeholder="E-Mail"
        />
    
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleForm}     
          placeholder="Senha"
        />
        <button>
          Enviar
        </button>
      </form>

    </div>
  );
}


