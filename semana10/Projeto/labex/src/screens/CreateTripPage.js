import React from "react";
import {useHistory} from 'react-router-dom'





export default function CreateTripPage() {
  const history = useHistory()
  const goToHome = () =>{
    history.push("/")
  }

  return (
    <div>
      <p>
          Criar viagem
      </p>
      <button onClick={goToHome}>Logout</button>
    </div>
  );
}

