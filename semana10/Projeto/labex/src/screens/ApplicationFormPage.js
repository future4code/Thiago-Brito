import React from "react";
import {useHistory} from 'react-router-dom'





export default function ApplicationFormPage() {
  const history = useHistory()

  const goToHome = () =>{
    history.push("/")
  }
  return (
    <div>
      <h2> Formulario</h2>
    
    </div>
  );
}
