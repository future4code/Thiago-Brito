import axios from 'axios';
import React from 'react';
import useForm from '../../Hooks/useForm';

export default function SignupPage() {
  const {form, onChange, resetState} = useForm({email:"", password:"", username:""})
  const Sign = () => {
    const body = {email:form.email, password:form.password, username:form.username}
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", body)
    .then((response)=>{
      console.log(response)
      window.localStorage.setItem("token", response.data.token)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
   const handleForm = (event) =>{
     const {name, value} = event.target
     onChange(name, value)
   }
   const submitForm = (event) =>{
     event.preventDefault()
     Sign()
     resetState()

   }
  return (
    
    <div>
        <h1>Sign-Up</h1>
        <form onSubmit={submitForm}      
        >
          <input
            name="email"
            type="email"
            placeholder="email"
            value={form.email}
            onChange={handleForm}
          />
                  <input
            name="username"
            type="text"
            placeholder="nome"
            value={form.username}
            onChange={handleForm}
          />
                    <input
            name="password"
            type="password"
            placeholder="senha"
            value={form.password}
            onChange={handleForm}
          />
          <button>
            Enviar
          </button>
        </form>
    </div>
  );
}


