import React from "react";
import {useHistory} from 'react-router-dom'





export default function LoginPage() {
  const history = useHistory()
  const goToHome = () =>{
    history.push("/")
  }
  return (
    <div>
      <p>
          login
      </p>
      <button onClick={goToHome}>Voltar</button>
    </div>
  );
}
