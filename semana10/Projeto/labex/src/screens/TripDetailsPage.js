import React from "react";
import {useHistory} from 'react-router-dom'




export default function TripDetailsPage() {
  const history = useHistory()
  const goToHome = () =>{
    history.push("/")
  }
  return (
    <div>
      <p>
          Detalhes
      </p>
      <button onClick={goToHome}>Voltar</button>
    </div>
  );
}
